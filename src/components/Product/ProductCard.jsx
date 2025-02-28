/* eslint-disable react/prop-types */
// import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
// import Loader from "../Laoder/Loader"
const ProductCard = ({ product, flex, renderDesc }) => {
    // const [isLoading , setIsLoading] = useState(false)
    // Destructure the product object to access its properties
    const { title, price, image, rating, id, description } = product;

    return (
        <>

            <div className={`${classes.card__container} ${flex && classes.product__flexed}`}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt="" />
                </Link>
                <div>
                    <h3>{title}</h3>
                    {renderDesc && <p style={{ maxWidth: "500px" }}>{description}</p>}
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

        </>
    )
}

export default ProductCard