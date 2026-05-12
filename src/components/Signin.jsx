import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

    const navigate = useNavigate()

    // states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // submit function
    const handlesubmit = async (e) => {

        e.preventDefault()

        setLoading("Please wait...")
        setError("")
        setSuccess("")

        const formdata = new FormData()

        formdata.append("email", email)
        formdata.append("password", password)

        try {

            const response = await axios.post(
                "https://evalynekifaru.alwaysdata.net/api/signin",
                formdata
            )

            // success message
            setSuccess(response.data.message)

            // SAVE USER SESSION
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            )

            // notify navbar instantly
            window.dispatchEvent(new Event("userChanged"));

            setLoading("")

            // redirect
            navigate("/")

        } catch (error) {

            console.log(error)

            setError(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong"
            )

            setLoading("")
        }
    }

    return (
        <div className="row mt-5 justify-content-center">

            <div className='col-md-6 card shadow p-4'>

                <h1 className='text-primary'>
                    <b><u>Sign In</u></b>
                </h1>

                <h3 className='text-warning'>{loading}</h3>
                <h3 className='text-success'>{success}</h3>
                <h3 className='text-danger'>{error}</h3>

                <form onSubmit={handlesubmit}>

                    <input
                        type="email"
                        placeholder='✉️ Email'
                        className='form-control bg-secondary text-white'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <input
                        type="password"
                        placeholder='🔑 Password'
                        className='form-control bg-secondary text-white'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />

                    <button
                        type='submit'
                        className='btn btn-success w-100'
                    >
                        Sign In
                    </button>

                    <br /><br />

                    <b>
                        <p>
                            Don't have an account?
                            <Link to="/signup"> Sign Up</Link>
                        </p>
                    </b>

                </form>
            </div>
        </div>
    )
}

export default Signin