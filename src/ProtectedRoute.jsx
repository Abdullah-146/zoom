import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const accessToken = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));
  // show unauthorized screen if no accessToken is found in localstorage
  if (
    !accessToken ||
    accessToken === "undefined" ||
    accessToken === null ||
    accessToken === ""
  ) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;