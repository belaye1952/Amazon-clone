// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
import Order from './pages/Orders/Orders'
import Payment from './pages/Payment/Payment'
import Auth from './pages/Auth/Auth'
import Results from './pages/Result/Results'
import ProductDetails from './pages/ProductDetail/ProductDetail'
// import Category from './components/Category/Category'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './components/protetedRoute/ProtectedRoute'


const stripePromise = loadStripe('pk_live_51R0pl3EaQoz4FX6x2Zbph7qZnQUXLdmFF2MmKalHY3m8bAuDLPjphtIwElpCW3nbRiPV4UaRtU7vTJjjhVBuW1Fl000Vy3hSc9');


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/auth' element={<Auth />} />

                <Route path='/payment' element={
                    <ProtectedRoute
                        msg={"Please Login to Continue with payment"}
                        redirect={"/payment"}
                    >
                        <Elements stripe={stripePromise} >
                            <Payment />
                        </Elements>
                    </ProtectedRoute>
                } />


                <Route path='/orders' element={

                    <ProtectedRoute
                        msg={"Please Login to Continue your orders"}
                        redirect={"/orders"}
                    >
                        <Order />

                    </ProtectedRoute>

                } />

                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default Routing