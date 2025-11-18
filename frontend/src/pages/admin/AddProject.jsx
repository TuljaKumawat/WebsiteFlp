import React, { useState } from "react";
import api from "../api";

const AddProject = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!name || !desc || !img) {
      setError("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("img", img);

    try {
      await api.post("/ad/addproject", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Project added successfully!");
      setName("");
      setDesc("");
      setPreview("");
      setImg(null);
    } catch (err) {
      console.error(err);
      setError("Error adding project. Try again.");
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: "650px" }}>
      <div className="card shadow-sm border-0 p-4">

        <h3 className="text-center fw-bold mb-3 text-warning">
          Add New Project
        </h3>

        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
          <div className="mb-3">
            <label className="form-label fw-semibold">Project Image</label>
            <input
              type="file"
              className="form-control rounded-3"
              onChange={(e) => {
                setImg(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>

          {preview && (
            <div className="text-center mb-3">
              <img
                src={preview}
                alt="Preview"
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: "180px" }}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Project Name</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter project title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Short Description</label>
            <textarea
              className="form-control rounded-3"
              rows="3"
              placeholder="Write a short description of the project"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 py-2 fw-semibold rounded-3"
          >
            Add Project
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProject;
