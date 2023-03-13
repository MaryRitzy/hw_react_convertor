import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import '../ExchangeCurrency/ExchangeCurrency'

type Props = {
    id: number
    title: string
    description: string
    price: number
    image: string
    currencySign: string
    changeModul: number
    addProductToCart: (id: number, count: number) => any
}

const ProductsListItem = ({
    id,
    title,
    description,
    price,
    image,
    addProductToCart,
    currencySign,
    changeModul,
}: Props) => {
    const updutePrice = price * changeModul

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-price">
                    {currencySign} : {updutePrice}
                </div>
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
