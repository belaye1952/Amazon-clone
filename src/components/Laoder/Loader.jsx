import React from 'react'
import { ScaleLoader } from "react-spinners"
const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
            }}>

            <ScaleLoader />
        </div>
    )
}

export default Loader