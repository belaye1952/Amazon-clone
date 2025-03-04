
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import numeral from "numeral";
function CurrencyFormat({ amount }) {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return (
        <div>{formattedAmount}</div>
    )
}

export default CurrencyFormat;