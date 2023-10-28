import Call from "./screens/Call";
import LandingPage from "./screens/LandingPage";
import ProductDeatils from "./screens/ProductDeatils";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Pricing from "./screens/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomPlan from "./screens/CustomPlan";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JoinCall from "./screens/joinCall";
import { useDispatch } from "react-redux";
import { setCredentials } from "./redux/slice/user/userSlice";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
export default function App() {

  const dispatch = useDispatch();

  //to get usrer credentials after each refresh
  useEffect(() => {

    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      dispatch(setCredentials({ data: loggedInUser }))
    }

  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/custom" element={<CustomPlan />} />
        <Route path="/details" element={<ProductDeatils />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plans" element={<Pricing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/call" element={<Call />} />
          <Route path="/joinCall" element={<JoinCall />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}
