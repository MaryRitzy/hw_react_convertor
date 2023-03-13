import './CartData.scss'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }

    currencySign: string
    changeModul: number
}
const CartData = ({
    changeModul,
    currencySign,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div className="cart">
            total:{''}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)] *
                        changeModul,
                0
            )}{' '}
            {currencySign}
        </div>
    )
}
export default CartData
