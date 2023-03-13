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
    buttonChangeSignEuro,
    buttonChangeSignUah,
    buttonChangeSignUsd,
    buttonChangeSignPlz,
}: Props) => {
    return (
        <CardActions className="exchange">
            <Button variant="outlined" onClick={buttonChangeSignUsd}>
                USD
            </Button>
            <Button variant="outlined" onClick={buttonChangeSignEuro}>
                EURO
            </Button>
            <Button variant="outlined" onClick={buttonChangeSignUah}>
                UAH
            </Button>
            <Button variant="outlined" onClick={buttonChangeSignPlz}>
                PLN
            </Button>
        </CardActions>
    )
}
export default ExchangeData
