import React from "react";

const Dashboard = () => {
  return (
    <>
      <section id="mid" className="py-4">
        <div className="container d-flex justify-content-center">

          <div className="row w-100">
            <h2 className="text-center my-3 fw-bold text-primary">Admin Dashboard</h2>

            <div className="d-flex justify-content-center">
              <div 
                className="card shadow-lg border-0 rounded-4 text-white"
                style={{
                  width: "28rem",
                  background: "linear-gradient(135deg, #007bff, #0056b3)"
                }}
              >
                <div className="card-body">
                  <h4 className="card-title fw-semibold">👋 Welcome Admin</h4>
                  <p className="card-text mt-2">
                    Here you can manage projects, clients, contacts, and newsletter subscribers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
