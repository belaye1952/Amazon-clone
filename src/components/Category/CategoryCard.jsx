/* eslint-disable react/prop-types */
import classes from './category.module.css'

const CategoryCard = ({ data }) => {
    return (
        <div className={classes.category}>
            <a href="">
                <span>
                    <h2>{data.title}</h2>
                </span>
                <img src={data.imgLink} alt="" />
                <p>shop know</p>
            </a>
        </div>
    )
}

export default CategoryCard