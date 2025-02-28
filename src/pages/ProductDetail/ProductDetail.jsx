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
    }, [productId])

    return (
        <Layout>
            {isLoading ? <Loader /> : (
                <ProductCard product={product} />
            )}
        </Layout>
    )
}

export default ProductDetail