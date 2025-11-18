import React, { useState, useEffect } from "react";
import api from "../api"; // Axios instance

const ProjectManagement = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all projects from backend
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await api.get("/ad/project");
      setProjectData(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Toggle status (Publish/Unpublish)
  const toggleStatus = async (id, currentStatus) => {
    try {
      await api.patch(`/ad/projectstatusupdate/${id}/${currentStatus}`);
      fetchProjects(); // refresh table
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await api.delete(`/ad/projectdelete/${id}`);
        fetchProjects(); // refresh table
      } catch (err) {
        console.error("Error deleting project:", err);
      }
    }
  };

  if (loading) {
    return <div className="text-center my-5">Loading Projects...</div>;
  }

  return (
  <section id="mid">
    <div className="container">

      {/* Header Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Project Management</h2>

        <a href="/ad/addproject">
          <button className="btn btn-dark">
            + Add New Project
          </button>
        </a>
      </div>

      {/* Card Wrapper */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">

          <table className="table table-hover table-striped mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Posted Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {projectData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projectData.map((val, index) => (
                  <tr key={val._id}>
                    <td>{index + 1}</td>

                    {/* STATUS BADGE */}
                    <td>
                      <span
                        className={`badge px-3 py-2 text-uppercase rounded-pill ${
                          val.status === "published"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleStatus(val._id, val.status)}
                      >
                        {val.status}
                      </span>
                    </td>

                    {/* IMAGE */}
                    <td>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/download/${val.img}`}
                        alt={val.name}
                        className="rounded"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td>{val.name}</td>
                    <td style={{ maxWidth: "250px" }}>{val.desc}</td>
                    <td>{new Date(val.createDate).toLocaleDateString()}</td>

                    {/* ACTION BUTTONS */}
                    <td className="d-flex gap-2">

                      <a
                        href={`/ad/projectupdate/${val._id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </a>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteProject(val._id)}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>

                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>

    </div>
  </section>
);

};

export default ProjectManagement;