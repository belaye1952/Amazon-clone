// import React from 'react'

import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams } from "react-router-dom"
import axios from "axios"
import { productUrl } from "../../Api/endPoints"
import ProductCard from "../../components/Product/ProductCard"
import classes from "./result.module.css"
import Loader from "../../components/Laoder/Loader"
const Results = () => {
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { categoryName } = useParams()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${productUrl}/category/${categoryName}`)
            .then((res) => {
                // console.log(res);
                setResult(res.data)
                setIsLoading(false)
            }
            ).catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    },
        [categoryName])

    return (
        <Layout>

            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
                <hr />
                {
                    isLoading ? <Loader /> : (
                        <div className={classes.product_container}>
                            {result?.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    renderAdd={true}
                                    product={product}
                                />
                            ))}
                        </div>
                    )
                }
            </section>
        </Layout>
    )
}

export default Results