/* eslint-disable react/prop-types */
// import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
const ProductCard = ({ product }) => {
    // Destructure the product object to access its properties
    const { title, price, image, rating } = product;

    return (
        <div className={classes.card__container}>
            <a href="">
                <img src={image} alt="" />
            </a>
            <div>
                <h3>{title}</h3>
                <div className={classes.rating}>
                    {/* rating  */}
                    <Rating value={rating.rate} defaultValue={2.5} precision={0.5} />
                    {/* count */}
                    <small>{rating.count}</small>
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

export default ProductCard