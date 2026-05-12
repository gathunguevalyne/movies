import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const checkUser = () => {

            const loggedUser = localStorage.getItem("user");

            // CHECK IF USER EXISTS
            if (
                loggedUser &&
                loggedUser !== "undefined"
            ) {

                try {

                    // PARSE USER SAFELY
                    const parsedUser = JSON.parse(loggedUser);

                    setUser(parsedUser);

                } catch (error) {

                    console.log("Invalid JSON in localStorage");

                    // REMOVE BROKEN DATA
                    localStorage.removeItem("user");

                    setUser(null);
                }

            } else {

                setUser(null);
            }
        };

        // RUN ON PAGE LOAD
        checkUser();

        // LISTEN FOR USER CHANGES
        window.addEventListener("userChanged", checkUser);

        // CLEANUP
        return () => {
            window.removeEventListener(
                "userChanged",
                checkUser
            );
        };

    }, []);

    // LOGOUT FUNCTION
    const logout = () => {

        localStorage.removeItem("user");

        // UPDATE NAVBAR IMMEDIATELY
        window.dispatchEvent(new Event("userChanged"));

        navigate("/signin");
    };

    return (

        <nav
            className="
                navbar
                bg-secondary
                d-flex
                justify-content-between
                align-items-center
                p-2
            "
        >

            {/* LOGO */}
            <h2 className="text-danger fw-bold">

                FilmHouse

            </h2>

            {/* NAVIGATION */}
            <div className="nav-links">

                {!user ? (

                    <>
                        <Link
                            to="/signup"
                            className="btn btn-danger m-2"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/signin"
                            className="btn btn-danger m-2"
                        >
                            Sign In
                        </Link>

                        <Link
                            to="/addproducts"
                            className="btn btn-danger m-2"
                        >
                            Add Products
                        </Link>

                        <Link
                            to="/"
                            className="btn btn-danger m-2"
                        >
                            Get Products
                        </Link>
                    </>

                ) : (

                    <div
                        className="
                            d-flex
                            align-items-center
                            gap-3
                        "
                    >

                        {/* WELCOME USER */}
                        <span className="text-light fw-bold">

                            Welcome {user.username}

                        </span>

                        {/* LOGOUT BUTTON */}
                        <button
                            className="btn btn-dark"
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </div>

                )}

            </div>

        </nav>
    );
};

export default Navbar;