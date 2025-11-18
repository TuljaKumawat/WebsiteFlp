import React, { useEffect, useState } from "react";
import api from "../api";

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await api.get("/ad/contact");
      setContacts(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container my-4">

      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-primary text-white rounded-top-4">
          <h4 className="m-0">📬 Contact Form Submissions</h4>
        </div>

        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>City</th>
                  <th>Posted Date</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c, i) => (
                  <tr key={c._id}>
                    <td>{i + 1}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.mobile}</td>
                    <td>{c.city}</td>
                    <td>{new Date(c.postedDate).toLocaleString()}</td>
                  </tr>
                ))}

                {contacts.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No Submissions Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactManagement;
