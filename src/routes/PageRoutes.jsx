import { Navigate, Route, Routes } from "react-router-dom";
import Course from "../pages/CoursePage";
import Category from "../component/Category";
import CategorySearch from "../component/CategorySearch";
import Search from "../pages/SearchPage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import AdminModule from "../pages/AdminModule";
import Module from "../component/Module";
import NotFoundPage from "../component/NotFoundPage";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/api/search" />} />
      <Route index path="/api/search" element={<Search />} />
      <Route path="/api/category" element={<Category />} />
      <Route
        path="/api/category/:categoria/:palabra"
        element={<CategorySearch />}
      />
      <Route path="/api/course" element={<Course />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/api/adminModule" element={<AdminModule />} />
      <Route path="/api/adminModule/:module" element={<Module />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PageRoutes;
