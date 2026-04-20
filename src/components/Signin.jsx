import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signin = () => {
    //declare our states here
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // definr the three states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        const formdata = new FormData()
        formdata.append("email", email)
        formdata.append("password", password)
        try {
            const response = await axios.post("http://higgs.alwaysdata.net/api/signin", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className='col-md-6 card shadow'>
                <h1 className='text-success'> <b> <u>Sign In</u> </b></h1>
                {/* bind the states */}
                <h3 className='text-warning'>{loading}</h3>
                <h3 className='text-success'>{success}</h3>
                <h3 className='text-danger'>{error}</h3>

                <form action="" onSubmit={handlesubmit}>
                    <input type="email" placeholder='✉️ Email' className='form-control bg-secondary text-white' onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" placeholder='🔑 Password' className='form-control bg-secondary text-white' onChange={(e) => setPassword(e.target.value)} /> <br />
                    <button type='submit' className='btn btn-success w-100'>Sign In</button><br />
                    <b><p>Don't have an account?   <Link to="/signup">Sign Up</Link> </p> </b>
                </form>
            </div>
        </div>
    )
}

export default Signin