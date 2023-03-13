import './PriceCurrency.scss'
type Props = {
    currencyData: {
        totalCurrenty: string
        totalPrice: number
    }
}
const PriceCurrency = ({ currencyData }: Props) => {
    return (
        <div className="currency">
            {currencyData.totalCurrenty}:{currencyData.totalPrice}
        </div>
    )
}
export default PriceCurrency
