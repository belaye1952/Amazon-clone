// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
import Order from './pages/Orders/Orders'
import Payment from './pages/Payment/Payment'
import SignIn from './pages/Auth/SignIn'

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/auth' element={<SignIn />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order' element={<Order />} />
                <Route path='/cart' element={<Cart />} />
                <Route />
            </Routes>
        </Router>
    )
}

export default Routing