import { Navigate, Route, Routes } from "react-router-dom";
import Course from "../pages/CoursePage";
import Home from "../component/Home";
import Search from "../pages/SearchPage";
import Profile from "../pages/ProfilePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/course" element={<Course />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PageRoutes;
