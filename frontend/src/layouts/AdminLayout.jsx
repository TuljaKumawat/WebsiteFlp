import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminFooter from "../components/admin/AdminFooter";

const AdminLayout = () => {
  return (
    <>
      {/* HEADER (with navigation links) */}
      <AdminHeader />

      {/* PAGE CONTENT */}
      <div className="container mt-4">
        <Outlet />
      </div>

      {/* FOOTER */}
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
