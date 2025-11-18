import React, { useEffect, useState } from "react";
import api from "../api";

const NewsletterManagement = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubscribers = async () => {
    try {
      const res = await api.get("/ad/subscribe");
      setSubscribers(res.data.data);
    } catch (err) {
      setError("Failed to load subscribers");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div className="container my-4">
      <h4 className="fw-bold mb-3">All Newsletter Subscribers</h4>

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border"></div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {!loading && subscribers.length === 0 && (
        <div className="alert alert-info text-center">
          No subscribers found.
        </div>
      )}

      {subscribers.length > 0 && (
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Subscribed Date</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s, i) => (
              <tr key={s._id}>
                <td>{i + 1}</td>
                <td>{s.email}</td>
                <td>{new Date(s.subscribedDate).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NewsletterManagement;
