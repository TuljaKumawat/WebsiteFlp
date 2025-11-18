import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", mobile: "", city: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects-json`);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchClients = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/clients-json`);
      setClients(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/contact`, contactForm);
      alert(res.data.message);
      setContactForm({ name: "", email: "", mobile: "", city: "" });
    } catch (err) {
      alert(err.response?.data.message || "Error submitting form");
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/subscribe`, { email: newsletterEmail });
      alert(res.data.message);
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (err) {
      alert(err.response?.data.message || "Error subscribing");
    }
  };

  return (
    <>
      <Header />

      {/* ========================= HERO SECTION ========================= */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          height: "550px",
          background: "linear-gradient(120deg, #04214c, #074f84)",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="col-md-8">
            <h1 className="display-3 fw-bold">
              Transform Your Business with <span className="text-warning">Expert Guidance</span>
            </h1>
            <p className="lead mt-3 opacity-75">
              We build solutions that create impact. Modern, scalable and custom-built for your growth.
            </p>
            <button className="btn btn-warning btn-lg mt-3 px-4">
              Start Your Project →
            </button>
          </div>
        </div>
      </section>

      {/* ========================= PROJECTS ========================= */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Featured Projects</h2>

        <div className="row">
          {projects.map((p) => (
            <div key={p._id} className="col-md-4 mb-4">
              <div
                className="shadow-lg p-3 rounded"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/download/${p.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                ></div>

                <h4 className="mt-3">{p.name}</h4>
                <p className="text-muted">{p.desc}</p>
                <button className="btn btn-outline-primary">Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= CLIENTS ========================= */}
      <section style={{ background: "#f0f4ff" }} className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Clients Who Trust Us</h2>

          <div className="row justify-content-center">
            {clients.map((c) => (
              <div key={c._id} className="col-md-3 col-sm-6 mb-4">
                <div className="card border-0 shadow p-4 text-center">
                  <div
                    className="mx-auto mb-3 rounded-circle shadow"
                    style={{
                      width: "110px",
                      height: "110px",
                      backgroundImage: `url(${process.env.REACT_APP_API_URL}/download/${c.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h5>{c.name}</h5>
                  <p className="text-muted small">{c.designation}</p>
                  <p className="text-secondary">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CONSULTATION FORM ========================= */}
      <section className="py-5" style={{ background: "#0f1b33" }}>
        <div className="container text-white">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <h2 className="fw-bold">Have a Vision? Let's Build It.</h2>
              <p className="opacity-75">
                Get expert consulting & project development tailored exactly to your needs.
              </p>

              <form className="mt-4" onSubmit={handleContactSubmit}>
                <input className="form-control mb-2" placeholder="Full Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <input className="form-control mb-2" placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <input className="form-control mb-2" placeholder="Mobile"
                  value={contactForm.mobile}
                  onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value })}
                />
                <input className="form-control mb-2" placeholder="City"
                  value={contactForm.city}
                  onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                />
                <button className="btn btn-warning w-100">Request Callback</button>
              </form>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <img
                src={`${process.env.REACT_APP_API_URL}/download/${projects[0]?.img}`}
                alt="Preview"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= NEWSLETTER ========================= */}
      <section className="py-4 bg-light">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="fw-bold">Stay Updated with WebWorks</h5>

          <form className="d-flex" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="form-control"
              style={{ borderRadius: "8px 0 0 8px" }}
              placeholder={newsletterSubscribed ? "Subscribed ✔" : "Enter your email"}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              disabled={newsletterSubscribed}
            />
            <button
              className="btn btn-primary"
              style={{ borderRadius: "0 8px 8px 0" }}
              disabled={newsletterSubscribed}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
