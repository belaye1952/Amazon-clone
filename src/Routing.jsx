// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
import Order from './pages/Orders/Orders'
import Payment from './pages/Payment/Payment'
import SignUp from './pages/Auth/SignUp'
import Results from './pages/Result/Results'
import ProductDetails from './pages/ProductDetail/ProductDetail'
// import Category from './components/Category/Category'

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/auth' element={<SignUp />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order' element={<Order />} />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route />
            </Routes>
        </Router>
    )
}

export default Routing