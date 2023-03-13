import './ExchangeCurrency.scss'
import { Button, CardActions } from '@mui/material'
import '../ProductsList/ProductsListItem'

type Props = {
    buttonChangeSignEuro: () => void
    buttonChangeSignUsd: () => void
    buttonChangeSignUah: () => void
    buttonChangeSignPlz: () => void
}
const ExchangeData = ({
    buttonChangeSignUah,
    buttonChangeSignEuro,
    buttonChangeSignUsd,
    buttonChangeSignPlz,
}: Props) => {
    return (
        <CardActions className="exchange">
            <Button
                variant="outlined"
                /* onClick={() => addButtonChange('USD', 1.07)}*/
                onClick={buttonChangeSignUsd}
            >
                USD
            </Button>
            <Button
                variant="outlined"
                /* onClick={() => addButtonChange('EURO', 1)}*/
                onClick={buttonChangeSignEuro}
            >
                EURO
            </Button>
            <Button
                variant="outlined"
                /*onClick={() => addButtonChange('UAH', 40)}*/
                onClick={buttonChangeSignUah}
            >
                UAH
            </Button>
            <Button
                variant="outlined"
                /*onClick={() => addButtonChange('PLN', 4.7)}*/
                onClick={buttonChangeSignPlz}
            >
                PLN
            </Button>
        </CardActions>
    )
}
export default ExchangeData
