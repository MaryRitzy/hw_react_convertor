import './App.scss'
import ProductsList from 'components/ProductsList/ProductsList'
import { Typography } from '@mui/material'
import ExchangeCurrency from 'components/ExchangeCurrency/ExchangeCurrency'
import { useState } from 'react'
import CartData from 'components/CartData/CartData'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [currencySign, setcurrencySign] = useState<string>('EUR')

    const [changeModul, setchangeModul] = useState<number>(1)

    const buttonChangeSignEuro = () => {
        setcurrencySign(() => 'EUR')
        setchangeModul(1)
    }

    const buttonChangeSignUsd = () => {
        setcurrencySign(() => 'USD')
        setchangeModul(1.07)
    }

    const buttonChangeSignUah = () => {
        setcurrencySign(() => 'UAH')
        setchangeModul(40)
    }

    const buttonChangeSignPlz = () => {
        setcurrencySign(() => 'PLN')
        setchangeModul(4.7)
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
            <ExchangeCurrency
                buttonChangeSignEuro={buttonChangeSignEuro}
                buttonChangeSignUsd={buttonChangeSignUsd}
                buttonChangeSignUah={buttonChangeSignUah}
                buttonChangeSignPlz={buttonChangeSignPlz}
            />
            <ProductsList
                addProductToCart={addProductToCart}
                currencySign={currencySign}
                changeModul={changeModul}
            />
            <CartData
                productsInCart={productsInCart}
                currencySign={currencySign}
                changeModul={changeModul}
            />
        </div>
    )
}

export default App
