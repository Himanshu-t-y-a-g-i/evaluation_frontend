import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}