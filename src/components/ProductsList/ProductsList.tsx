import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    currencySign: string
    changeModul: number
    addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({
    addProductToCart,
    currencySign,
    changeModul,
}: Props) => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map(
                    ({ id, title, description, price, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            {' '}
                            <ProductsListItem
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                price={price}
                                addProductToCart={addProductToCart}
                                currencySign={currencySign}
                                changeModul={changeModul}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
