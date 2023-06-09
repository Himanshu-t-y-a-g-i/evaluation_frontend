import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Posts } from "../Pages/Posts";
import { Signup } from "../Pages/Signup";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    )
}