// src/components/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAdmin();

  if (loading) return <div className="page-hero"><p>Loading...</p></div>;
  if (!isAdmin) return <Navigate to="/login" replace />;
  return children;
};

export default AdminRoute;