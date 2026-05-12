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
    const [sortOption, setSortOption] = useState("")

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

    // FILTER PRODUCTS
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

    // SORT PRODUCTS
    const sortedProducts = [...filteredProducts].sort((a, b) => {

        if (sortOption === "a-z") {

            return a.product_name.localeCompare(
                b.product_name
            )
        }

        if (sortOption === "z-a") {

            return b.product_name.localeCompare(
                a.product_name
            )
        }

        if (sortOption === "high-low") {

            return (
                Number(b.product_cost) -
                Number(a.product_cost)
            )
        }

        if (sortOption === "low-high") {

            return (
                Number(a.product_cost) -
                Number(b.product_cost)
            )
        }

        return 0
    })

    // UNIQUE CATEGORIES
    const categories = [

        ...new Set(

            sortedProducts
                .filter(
                    (item) => item.category
                )
                .map(
                    (item) => item.category
                )
        )
    ]

    return (

        <div className="container-fluid bg-dark text-light">

            <div className="row">

                {/* CAROUSEL */}
                <Carousel />

                {/* YOUTUBE VIDEO SECTION */}
                <div className="col-md-12 mt-4 mb-4">

                    <div className="row">

                        {/* VIDEO 1 */}
                        <div className="col-md-4 mb-3">

                            <div className="ratio ratio-16x9">

                                <iframe
                                    src="https://www.youtube.com/embed/zHrsjepmhs4"
                                    title="YouTube video 1"
                                    allowFullScreen
                                ></iframe>

                            </div>

                        </div>

                        {/* VIDEO 2 */}
                        <div className="col-md-4 mb-3">

                            <div className="ratio ratio-16x9">

                                <iframe
                                    src="https://www.youtube.com/embed/hTTMXs6uOTM"
                                    title="YouTube video 2"
                                    allowFullScreen
                                ></iframe>

                            </div>

                        </div>

                        {/* VIDEO 3 */}
                        <div className="col-md-4 mb-3">

                            <div className="ratio ratio-16x9">

                                <iframe
                                    src="https://www.youtube.com/embed/-IZ9CbADOqA"
                                    title="YouTube video 3"
                                    allowFullScreen
                                ></iframe>

                            </div>

                        </div>

                    </div>

                </div>

                {/* SEARCH + SORT */}
                <div className="col-md-6 mt-4 mb-4">

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

                <div className="col-md-6 mt-4 mb-4">

                    <select
                        className="form-select form-select-lg"
                        value={sortOption}
                        onChange={(e) =>
                            setSortOption(e.target.value)
                        }
                    >

                        <option value="">
                            Sort Movies
                        </option>

                        <option value="a-z">
                            A - Z
                        </option>

                        <option value="z-a">
                            Z - A
                        </option>

                        <option value="high-low">
                            Highest Price - Lowest
                        </option>

                        <option value="low-high">
                            Lowest Price - Highest
                        </option>

                    </select>

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
                                    sortedProducts

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
                                                    minWidth: "210px",
                                                    maxWidth: "210px",
                                                    borderRadius: "12px",
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
                                                        height: "280px",
                                                        width: "100%",
                                                        objectFit: "cover"
                                                    }}
                                                />

                                                {/* BODY */}
                                                <div className="card-body p-3">

                                                    <h5
                                                        className="fw-bold"
                                                        style={{
                                                            fontSize: "16px"
                                                        }}
                                                    >

                                                        {
                                                            product.product_name
                                                        }

                                                    </h5>

                                                    <p
                                                        style={{
                                                            fontSize: "13px",
                                                            height: "60px",
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

                                                        Purchase  Now

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