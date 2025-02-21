/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCartAdd } from "react-icons/bi";
import classes from "./Header.module.css";

function Header() {
    return (
        <>
            <section className={classes.fixed}>
                <section>
                    {/* Header  Container*/}
                    <div className={classes.header__container}>
                        {/* Logo and DeliverContent Container */}
                        <div className={classes.logo__container}>
                            {/* Logo */}
                            <a to="/">
                                <img
                                    src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                                    alt=""
                                />
                            </a>

                            {/* Delivery Content */}
                            <div className={classes.delivery}>
                                <span>
                                    {/* Location Icon */}
                                    <SlLocationPin />
                                </span>
                                <div className={classes.delivery__details}>
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
                            <FaSearch size={25} />
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

                            <a to="/">
                                <div>
                                    <p>Hello, Sign in</p>
                                    <span>Account & Lists</span>
                                </div>
                            </a>

                            <a to="/orders">
                                <p>Returns</p>
                                <span>& Orders</span>
                            </a>

                            <a to="/cart" className={classes.cart}>
                                <BiCartAdd size={38} />
                                <span>0</span>
                            </a>
                            <span>Cart</span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Header;