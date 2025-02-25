// import React from 'react'
import CarouselEffect from "../../components/Carousel/CarouselEffect"
import Category from "../../components/Category/Category"
import Layout from "../../components/Layout/Layout"
import Product from "../../components/Product/Product"

function Landing() {
    return (
        <Layout>
            <CarouselEffect />
            <Category />
            <Product />
        </Layout>
    )
}

export default Landing