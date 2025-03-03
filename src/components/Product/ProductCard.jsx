/* eslint-disable react/prop-types */
// import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

// component that renders a product card
const ProductCard = ({ product, flex, renderDesc }) => {
    // destructuring the product object 
    const { title, price, image, rating, id, description } = product;
    // getting the state and dispatch from the DataContext using the useContext hook 
    const [state, dispatch] = useContext(DataContext) 
           

      


    // function to add the product to the basket
    const addToCart = () => {
        // dispatching the action to add the product to the basket
        dispatch({
            // type of the action
            type: Type.ADD_TO_BASKET,
            // the product to be added
            item: {
                title, price, image, rating, id, description
            }
        })
    }

        
    

    // rendering the product card
    return (
        <>

            {/* container for the product card */}
            <div className={`${classes.card__container} ${flex && classes.product__flexed}`}>
                {/* link to the product detail page */}
                <Link to={`/product/${id}`}>
                    {/* image of the product */}
                    <img src={image} alt="" />
                </Link>
                {/* container for the product details */}
                <div>
                    {/* title of the product */}
                    <h3>{title}</h3>
                    {/* description of the product */}
                    {renderDesc && <p style={{ maxWidth: "750px" }}>{description}</p>}
                    {/* container for the rating and count */}
                    <div className={classes.rating}>
                        {/* rating of the product */}
                        <Rating value={rating?.rate} defaultValue={2.5} precision={0.5} />
                        {/* count of the product */}
                        <small>{rating?.count}</small>
                    </div>
                    {/* price of the product */}
                    <div>
                        <CurrencyFormat amount={price} />
                    </div>
                    {/* button to add the product to the basket */}
                    <button className={classes.button} onClick={addToCart}>
                        add to cart
                    </button>
                </div>
            </div>

        </>
    )
}

// exporting the ProductCard component
export default ProductCard