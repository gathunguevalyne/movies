import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'

const Getproducts = () => {

    const navigate = useNavigate()

    // STATES
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")

    // IMAGE PATH
    const imagepath =
        "https://evalynekifaru.alwaysdata.net/static/images/"

    // FETCH PRODUCTS
    const getproducts = async () => {

        setLoading("Loading products...")

        try {

            const response = await axios.get(
                "https://evalynekifaru.alwaysdata.net/api/getproducts"
            )

            console.log("FULL RESPONSE:", response)

            console.log("DATA:", response.data)

            // ENSURE ARRAY
            if (Array.isArray(response.data)) {

                setProducts(response.data)

            } else {

                setError("Products data is invalid")
            }

            setLoading("")

        } catch (error) {

            console.log(error)

            setError(error.message)

            setLoading("")
        }
    }

    useEffect(() => {

        getproducts()

    }, [])

    // SAFE FILTER
    const filteredProducts = products.filter((item) => {

        const name =
            item.product_name?.toLowerCase() || ""

        const description =
            item.product_description?.toLowerCase() || ""

        const category =
            item.category?.toLowerCase() || ""

        const searchText = search.toLowerCase()

        return (

            name.includes(searchText)

            ||

            description.includes(searchText)

            ||

            category.includes(searchText)
        )
    })

    // UNIQUE CATEGORIES
    const categories = [

        ...new Set(

            filteredProducts
                .filter(
                    (item) => item.category
                )
                .map(
                    (item) => item.category
                )
        )
    ]

    console.log("PRODUCTS:", products)

    console.log("CATEGORIES:", categories)

    return (

        <div className="container-fluid bg-dark text-light">

            <div className="row">

                {/* CAROUSEL */}
                <Carousel />

                {/* SEARCH */}
                <div className="col-md-12 mt-4 mb-4">

                    <input
                        type="search"
                        className="form-control form-control-lg"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                {/* LOADING */}
                {
                    loading &&
                    <h3 className="text-warning text-center">
                        {loading}
                    </h3>
                }

                {/* ERROR */}
                {
                    error &&
                    <h3 className="text-danger text-center">
                        {error}
                    </h3>
                }

                {/* NO PRODUCTS */}
                {
                    products.length === 0 &&
                    !loading &&
                    <h3 className="text-center">
                        No products found
                    </h3>
                }

                {/* CATEGORY SECTIONS */}
                {
                    categories.map((category, index) => (

                        <div
                            key={index}
                            className="mb-5"
                        >

                            {/* HEADER */}
                            <div
                                className="
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                    mb-3
                                "
                            >

                                <h2 className="text-danger fw-bold">

                                    {category}

                                </h2>

                            </div>

                            {/* MOVIE ROW */}
                            <div
                                className="
                                    d-flex
                                    flex-nowrap
                                    overflow-auto
                                    pb-3
                                "
                                style={{
                                    gap: "15px"
                                }}
                            >

                                {
                                    filteredProducts

                                        .filter(
                                            (product) =>
                                                product.category === category
                                        )

                                        .map((product) => (

                                            <div
                                                key={product.product_id}

                                                className="
                                                    card
                                                    bg-black
                                                    text-light
                                                    border-0
                                                    shadow
                                                "

                                                style={{
                                                    minWidth: "250px",
                                                    maxWidth: "250px",
                                                    borderRadius: "15px",
                                                    overflow: "hidden"
                                                }}
                                            >

                                                {/* IMAGE */}
                                                <img
                                                    src={
                                                        imagepath +
                                                        product.product_photo
                                                    }

                                                    alt=""

                                                    style={{
                                                        height: "350px",
                                                        objectFit: "cover"
                                                    }}
                                                />

                                                {/* BODY */}
                                                <div className="card-body">

                                                    <h5 className="fw-bold">

                                                        {
                                                            product.product_name
                                                        }

                                                    </h5>

                                                    <p
                                                        style={{
                                                            fontSize: "14px",
                                                            height: "70px",
                                                            overflow: "hidden"
                                                        }}
                                                    >

                                                        {
                                                            product.product_description
                                                        }

                                                    </p>

                                                    <h6 className="text-success">

                                                        Ksh {
                                                            product.product_cost
                                                        }

                                                    </h6>

                                                    <button
                                                        className="
                                                            btn
                                                            btn-danger
                                                            w-100
                                                        "

                                                        onClick={() =>
                                                            navigate(
                                                                "/makepayment",
                                                                {
                                                                    state: {
                                                                        product
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    >

                                                        Watch Now

                                                    </button>

                                                </div>

                                            </div>

                                        ))
                                }

                            </div>

                        </div>

                    ))
                }

            </div>

            <Footer />

        </div>
    )
}

export default Getproducts