// import React from 'react'

import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams } from 'react-router-dom'
import axios from "axios"
import { productUrl } from "../../Api/endPoints"
import ProductCard from "../../components/Product/ProductCard"
import Loader from "../../components/Laoder/Loader"

const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);

        // const timeout = setTimeout(() => {
        //     setIsLoading(false)
        // }, 5000)
        axios.get(`${productUrl}/${productId}`)
            .then((res) => {
                // console.log(res);
                setProduct(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false)
            })
        // return () => clearTimeout(timeout)
    }, [productId])

    return (
        <Layout>
            {isLoading ? <Loader /> : (
                <ProductCard
                    product={product}
                    flex={true}
                    renderDesc={true}
                    renderAdd={true}
                />
            )}
        </Layout>
    )
}

export default ProductDetail