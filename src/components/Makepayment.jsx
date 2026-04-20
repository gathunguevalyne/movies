import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


const Makepayment = () => {
    const { singleproduct } = useLocation().state || {}
    const imagepath = "http://evalynekifaru.alwaysdata.net/static/images/"

    // declare the states here 
    const [phone, setPhone] = useState("")

    // three states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle Submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        // create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("phone", phone)
        formdata.append("amount", singleproduct.product_cost)
        try {
            const response = await axios.post("http://evalynekifaru.alwaysdata.net/api/mpesa_payment", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

    return (
        <div className="row justify-content-center">
            <h1 className='text-success'> <u> <b>Make Payment-Lipa na Mpesa </b></u></h1>
            <div className="col-md-6 card shadow p-4">
                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "400px", objectFit: "contain" }} />
                <h4 className='text-success text-start'>{singleproduct.product_name}</h4>
                <p className='text-start'>{singleproduct.product_description}</p>
                <b className='text-start text-danger'>Ksh {singleproduct.product_cost}</b> <br />

                {/* bind the state  */}
                <h4 className='text-warning'>{loading}</h4>
                <h4 className='text-success'>{success}</h4>
                <h4 className='text-danger'>{error}</h4>

                <form action="" onSubmit={handlesubmit}>
                    <input type="number" className='form-control bg-secondary text-white' placeholder='Enter phone +254xxxxxxxxx' onChange={(e) => setPhone(e.target.value)} /> <br />
                    <button type='submit' className='btn btn-success w-100' >Make Payment</button>
                </form>
            </div>
        </div>
    )
}

export default Makepayment