import React, { useEffect, useState } from "react";
import api from "../api";

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [counts, setCounts] = useState({ tstatus: 0, tpublished: 0, tunpublished: 0 });

  const fetchClients = async () => {
    try {
      const res = await api.get("/ad/client");
      setClients(res.data.data);
      setCounts({
        tstatus: res.data.tstatus,
        tpublished: res.data.tpublished,
        tunpublished: res.data.tunpublished,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    try {
      await api.patch(`/ad/client/status/${id}/${currentStatus}`);
      fetchClients();
    } catch (err) {
      console.error(err);
      alert(err.response?.data.message || "Error updating status");
    }
  };

  const deleteClient = async (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      try {
        await api.delete(`/ad/client/delete/${id}`);
        fetchClients();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="container my-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Client Management</h2>

        <a href="/ad/addclient" className="btn btn-primary px-4">
          + Add Client
        </a>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <div className="card shadow-sm border-0 text-center py-3">
            <h5 className="fw-semibold mb-1">Total Clients</h5>
            <h3 className="text-primary fw-bold">{counts.tstatus}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 text-center py-3">
            <h5 className="fw-semibold mb-1">Published</h5>
            <h3 className="text-success fw-bold">{counts.tpublished}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 text-center py-3">
            <h5 className="fw-semibold mb-1">Unpublished</h5>
            <h3 className="text-warning fw-bold">{counts.tunpublished}</h3>
          </div>
        </div>

      </div>

      {/* Client Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">

          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Description</th>
                <th style={{ width: "80px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((c, i) => (
                <tr key={c._id}>
                  <td>{i + 1}</td>

                  <td>
                    <button
                      className={`btn btn-sm px-3 ${
                        c.status === "published" ? "btn-success" : "btn-warning"
                      }`}
                      onClick={() => toggleStatus(c._id, c.status)}
                    >
                      {c.status}
                    </button>
                  </td>

                  <td>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/download/${c.img}`}
                      alt={c.name}
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </td>

                  <td className="fw-semibold">{c.name}</td>
                  <td>{c.designation}</td>
                  <td style={{ maxWidth: "250px" }}>{c.desc}</td>

                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteClient(c._id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
