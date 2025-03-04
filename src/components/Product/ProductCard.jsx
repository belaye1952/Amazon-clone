/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from 'react-router-dom';
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
    const { title, price, image, rating, id, description } = product;

    // Ensure useContext returns [state, dispatch]
    const [state, dispatch] = useContext(DataContext);

    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: {
                title, price, image, rating, id, description
            }
        });
    };

    return (
        <div className={`${classes.card__container} ${flex && classes.product__flexed}`}>
            <Link to={`/product/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <p style={{ maxWidth: "750px" }}>{description}</p>}
                <div className={classes.rating}>
                    <Rating value={rating?.rate} defaultValue={2.5} precision={0.5} />
                    <small>{rating?.count}</small>
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && (
                        <button className={classes.button} onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCard;