/* eslint-disable react/prop-types */
// import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
import Loader from "../Laoder/Loader"
const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false)
    // Destructure the product object to access its properties
    const { title, price, image, rating, id } = product;

    return (
        <>
            {
                isLoading ? <Loader /> : (

                    <div className={classes.card__container}>
                        <Link to={`/product/${id}`}>
                            <img src={image} alt="" />
                        </Link>
                        <div>
                            <h3>{title}</h3>
                            <div className={classes.rating}>
                                {/* rating  */}
                                <Rating value={rating?.rate} defaultValue={2.5} precision={0.5} />
                                {/* count */}
                                <small>{rating?.count}</small>
                            </div>
                            <div>
                                {/* price */}
                                <CurrencyFormat amount={price} />
                            </div>
                            <button className={classes.button}>
                                add to cart
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ProductCard