import './ExchangeCurrency.scss'
import { Button, CardActions } from '@mui/material'
import '../ProductsList/ProductsListItem'

type Props = {
    addButtonChange: (totalCurrenty: string, price: number) => void
}
const ExchangeData = ({ addButtonChange }: Props) => {
    return (
        <CardActions className="exchange">
            <Button
                variant="outlined"
                onClick={() => addButtonChange('USD', 1.07)}
            >
                USD
            </Button>
            <Button
                variant="outlined"
                onClick={() => addButtonChange('EURO', 1)}
            >
                EURO
            </Button>
            <Button
                variant="outlined"
                onClick={() => addButtonChange('UAH', 40)}
            >
                UAH
            </Button>
            <Button
                variant="outlined"
                onClick={() => addButtonChange('PLN', 4.7)}
            >
                PLN
            </Button>
        </CardActions>
    )
}
export default ExchangeData
