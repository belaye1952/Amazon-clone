// import React from 'react'

import numeral from "numeral"

const CurrencyFormat = () => {
    const formattedAmount = numeral.formats("$0,0.00")
    return <div>{formattedAmount}</div>
}

export default CurrencyFormat