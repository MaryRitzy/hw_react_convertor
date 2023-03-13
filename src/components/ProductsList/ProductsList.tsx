import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    currencyData: {
        totalCurrenty: string
        totalPrice: number
    }
    addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({ currencyData, addProductToCart }: Props) => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map(
                    ({ id, title, description, price, currency, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            {' '}
                            <ProductsListItem
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                price={price}
                                currency={currency}
                                currencyData={currencyData}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
