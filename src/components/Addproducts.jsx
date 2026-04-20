import React, { useState } from 'react'
import axios from 'axios'



const Addproducts = () => {
    //declare our states here
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")

    // define the three states for posting data
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        const formdata = new FormData()
        formdata.append("product_name", product_name)
        formdata.append("product_description", product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)
        try {
            const response = await axios.post("http://evalynekifaru.alwaysdata.net/api/add_product", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    return (
        <div className='row justify-content-center mt-3 '>
            <div className='col-md-8 card shadow p-4'>
                <h1 className='text-success'> <b> <u>Add Products</u></b></h1>

                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className='text-danger'>{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Enter Product Name' className='form-control bg-secondary text-white' onChange={(e) => setProductName(e.target.value)} /> <br />
                    <textarea name="" id="" className='form-control bg-secondary text-white' placeholder='Enter Product Description' onChange={(e) => setProductDescription(e.target.value)}></textarea> <br />
                    <input type="number" placeholder='Enter Product Cost' className='form-control bg-secondary text-white' onChange={(e) => setProductCost(e.target.value)} /> <br />
                    <input type="file" accept='image/*' className='form-control ' onChange={(e) => setProductPhoto(e.target.files[0])} />
                    <button className='btn btn-success w-100' type='submit'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Addproducts