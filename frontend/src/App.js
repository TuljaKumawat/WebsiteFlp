import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout

import AdminLayout from "./layouts/AdminLayout";
// Pages
import Dashboard from "./pages/admin/Dashboard";
import ProjectManagement from "./pages/admin/ProjectManagement";
import AddProject from "./pages/admin/AddProject";
import ClientManagement from "./pages/admin/ClientManagement";
import AddClient from "./pages/admin/AddClient";
import ContactManagement from "./pages/admin/ContactManagement";
import NewsletterManagement from "./pages/admin/NewsLetterManagement";
import HomePage from "./pages/HomePage";
// import ContactFormManagement from "./pages/admin/ContactFormManagement";
// import NewsletterManagement from "./pages/admin/NewsletterManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ADMIN MAIN ROUTE */}
        <Route path="/ad" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="project" element={<ProjectManagement />} />
          <Route path="/ad/addproject" element={<AddProject />} />
          <Route path="/ad/client" element={<ClientManagement />} />
  <Route path="/ad/addclient" element={<AddClient />} />
  <Route path="/ad/contact" element={<ContactManagement />} />
  <Route path="/ad/subscribe" element={<NewsletterManagement />} />
         
        </Route>

        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
