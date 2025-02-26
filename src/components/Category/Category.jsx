// import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryInfos } from './categoryFullInfo'
import classes from './category.module.css'
// import Layout from '../Layout/Layout'

const Category = () => {
    return (
        <div className={classes.category_container}>
            {
                categoryInfos.map((card) => (
                    <CategoryCard key={card.name} data={card} />
                ))
            }
        </div>
    )
}

export default Category