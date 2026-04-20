import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'

const Getproducts = () => {
    let navigate = useNavigate()
    //declare our states here
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    // function to get/fetch products 
    const getproducts = async () => {
        setLoading("Please wait...")
        try {
            const response = await axios.get("http://evalynekifaru.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])
    console.log(products);
    const imagepath = "http://evalynekifaru.alwaysdata.net/static/images/"

    return (
        <div className="container-fluid bg-info">
            <div className='row'>
                {/* carousel goes here */}
                <Carousel />
                <h1 className='text-success'><i><b>Available Products</b></i> </h1>
                {/* bind the states  */}
                <h2 className='text-warning text-center'>{loading}</h2>
                <h2 className='text-danger text-center'>{error}</h2>
                {products.map(singleproduct => (

                    <div className="col-md-3  mb-3">
                        <div className='card shadow h-100'>

                            {/* image goes here */}
                            <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "400px" }} />
                            {/* card body goes here */}
                            <div className="card-body">
                                {/* product name goes here */}
                                <h1>{singleproduct.product_name}</h1>
                                {/* product Description goes here  */}
                                <p>{singleproduct.product_description}</p>
                                {/* product cost goes here  */}
                                <b className='text-success'> Ksh {singleproduct.product_cost}</b> <br />
                                {/* purchase now button goes here  */}
                                <button className='btn btn-info w-100' onClick={() => navigate("/makepayment", { state: { singleproduct } })}> Purchase now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}
<hr />

export default Getproducts