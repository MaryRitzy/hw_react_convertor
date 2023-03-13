import './App.scss'
import ProductsList from 'components/ProductsList/ProductsList'
import { Typography } from '@mui/material'
import ExchangeCurrency from 'components/ExchangeCurrency/ExchangeCurrency'
import React, { useState } from 'react'
import CartData from 'components/CartData/CartData'

type Props = {}

type ChengeCurrencyProps = {
    totalCurrenty: string
    totalPrice: number
}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [currencyData, setCurrencyData] = useState<ChengeCurrencyProps>({
        totalCurrenty: 'EUR',
        totalPrice: 1,
    })

    const addButtonChange = (totalCurrenty: string, price: number) => {
        setCurrencyData(() => ({
            totalCurrenty: totalCurrenty,
            totalPrice: price,
        }))
    }

    const [productsInCart, setProductInCart] = useState<ProductsInCart>({
        1: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <div className="wrapper">
            <Typography variant="h2" align="center" className="title">
                Our shop page
            </Typography>
            <ExchangeCurrency addButtonChange={addButtonChange} />
            <ProductsList
                currencyData={currencyData}
                addProductToCart={addProductToCart}
            />
            <CartData productsInCart={productsInCart} />
        </div>
    )
}

export default App
