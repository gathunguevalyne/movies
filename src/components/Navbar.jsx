import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {

        const loadUser = () => {
            const savedUser = JSON.parse(localStorage.getItem("user"));
            setUser(savedUser);
        };

        // initial load
        loadUser();

        // listen for login/logout updates
        window.addEventListener("userChanged", loadUser);

        return () => {
            window.removeEventListener("userChanged", loadUser);
        };

    }, []);

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);

        window.dispatchEvent(new Event("userChanged"));

        navigate("/");
    };

    return (

        <nav className="navbar bg-secondary d-flex justify-content-between align-items-center p-2">

            {/* LOGO */}
            <h2 className="text-danger fw-bold">
                FilmHouse
            </h2>

            {/* NAV LINKS */}
            <div className="nav-links">

                {!user ? (

                    <>
                        <Link to="/signup" className="btn btn-danger m-2">
                            Sign Up
                        </Link>

                        <Link to="/signin" className="btn btn-danger m-2">
                            Sign In
                        </Link>

                        {/* HIDDEN WHEN NOT LOGGED IN */}
                        <Link to="/" className="btn btn-danger m-2">
                            Get Products
                        </Link>
                    </>

                ) : (

                    <div className="d-flex align-items-center gap-3">

                        <span className="text-light fw-bold">
                            Welcome {user.username}
                        </span>

                        {/* ONLY SHOW WHEN LOGGED IN */}
                        <Link to="/addproducts" className="btn btn-danger">
                            Add Products
                        </Link>

                        <Link to="/" className="btn btn-danger">
                            Get Products
                        </Link>

                        <button className="btn btn-dark" onClick={logout}>
                            Logout
                        </button>

                    </div>

                )}

            </div>

        </nav>
    );
};

export default Navbar;