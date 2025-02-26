// import React from 'react'

import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams } from "react-router-dom"
import axios from "axios"
import { productUrl } from "../../Api/endPoints"
import ProductCard from "../../components/Product/ProductCard"
import classes from "./result.module.css"
const Results = () => {
    const [result, setResult] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        axios.get(`${productUrl}/category/${categoryName}`)
            .then((res) => {
                console.log(res);
                setResult(res.data)
            }
            ).catch((err) => {
                console.log(err)
            })
    },
        [categoryName])

    return (
        <Layout>
            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
                <hr />
                <div className={classes.product_container}>
                    {result.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Results