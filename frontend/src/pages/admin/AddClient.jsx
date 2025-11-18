import React, { useState } from "react";
import api from "../api";

const AddClient = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!name || !designation || !desc || !img) {
      setError("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("desc", desc);
    formData.append("img", img);

    try {
      await api.post("/ad/addclient", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Client added successfully!");
      setName("");
      setDesignation("");
      setDesc("");
      setImg(null);
      setImgPreview("");
    } catch (err) {
      console.error(err);
      setError("Error adding client!");
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: "650px" }}>
      <div className="card shadow-sm border-0 p-4">
        
        <h3 className="text-center fw-bold mb-3 text-primary">
          Add New Client
        </h3>

        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
          <div className="mb-3">
            <label className="form-label fw-semibold">Client Name</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter client's full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Designation</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-3"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="E.g., CEO, Manager, Founder"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Short Description</label>
            <textarea
              className="form-control rounded-3"
              rows="3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write something about the client"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Client Image</label>
            <input
              type="file"
              className="form-control rounded-3"
              onChange={(e) => {
                setImg(e.target.files[0]);
                setImgPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>

          {imgPreview && (
            <div className="text-center mb-3">
              <img
                src={imgPreview}
                alt="Preview"
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: "160px" }}
              />
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
