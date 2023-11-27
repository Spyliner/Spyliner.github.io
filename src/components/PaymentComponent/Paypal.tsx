import { loadScript } from "@paypal/paypal-js";
import { withTranslation } from "react-i18next";




interface PaymentProps { 
    buttonId:string
}

const PaypalComponent = ({ buttonId }: PaymentProps) => {
    return (
        <div className="PaypalButton" id={buttonId }></div>
    ); 
}

export default withTranslation()(PaypalComponent)