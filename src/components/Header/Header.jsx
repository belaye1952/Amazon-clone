// import React from 'react'
import { IoMdSearch } from "react-icons/io";
import classes from "./Header.module.css"
import { BiCartAdd } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";


const Header = () => {
    return (
        <>
            <section className={classes.fixed}>
                <section>
                    <div className={classes.header__container}>
                        <div className={classes.logo__container}>
                            <a to="/">
                                <img
                                    src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                                    alt=""
                                />
                            </a>
                            <div className={classes.delivery}>
                                <span>
                                    <SlLocationPin />
                                </span>
                                <div>
                                    <p>Delivered To</p>
                                    <span>Ethiopia</span>
                                </div>
                            </div>
                        </div>

                        {/* Searching */}
                        <div className={classes.search}>
                            <select name="" id="">
                                <option value="">All</option>
                            </select>

                            <input type="text" name="" id="" placeholder="Search Product" />

                            {/* Search Icon */}
                            <IoMdSearch size={45} />
                        </div>

                        
                        {/* right Side Icons */}
                        <div className={classes.order__container}>
                            <a to="" className={classes.language}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                                    alt=""
                                />
                                <select name="" id="">
                                    <option value="">EN</option>
                                    <option value="">Ch</option>
                                    <option value="">JP</option>
                                </select>
                            </a>

                            <a to={'/user'}>
                                <div>

                                </div>
                            </a>

                            <a to="/orders">
                                <p>Returns</p>
                                <span>& Orders</span>
                            </a>

                            <a to="/cart" className={classes.cart}>
                                <BiCartAdd size={38} />
                                <span>total</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <LowerHeader /> */}
            </section>
        </>
    )
}

export default Header