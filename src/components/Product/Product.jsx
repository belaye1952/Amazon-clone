// import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import classes from "./Product.module.css"

const Product = () => {
    const [products, setProducts] = useState()


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            }, [])

        return (
            <section className={classes.products_container}>
                {
                    products?.map((eachProduct) => (
                        <ProductCard key={eachProduct.id} product={eachProduct} />
                    ))
                }
            </section>
        )
    })
}
export default Product;