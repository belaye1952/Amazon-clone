// import React from 'react'

import Layout from "../../components/Layout/Layout"
import { useParams } from "react-router-dom"

const Results = () => {
    const { categoryName } = useParams()
    console.log(categoryName); // 

    return (
        <Layout>
            <div>Results</div>
        </Layout>
    )
}

export default Results