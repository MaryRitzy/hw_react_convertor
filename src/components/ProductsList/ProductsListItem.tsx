import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import '../ExchangeCurrency/ExchangeCurrency'
import '../PriceCurrency/PriceCurrency.tsx'
import PriceCurrency from 'components/PriceCurrency/PriceCurrency'

type Props = {
    id: number
    title: string
    description: string
    currency: string
    price: number
    image: string
    currencyData: {
        totalCurrenty: string
        totalPrice: number
    }

    addProductToCart: (id: number, count: number) => void
}

const ProductsListItem = ({
    id,
    title,
    description,
    price,
    image,
    currency,
    currencyData,
    addProductToCart,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-price">
                    {currency}:{price}
                </div>

                <PriceCurrency currencyData={currencyData} />
            </CardContent>

            <CardActions className="product-btn-wrap">
                <Button
                    className="custom-btn btn-2"
                    variant="outlined"
                    onClick={() => addProductToCart(id, 1)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
