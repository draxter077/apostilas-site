import scroller from "./scroller/main.js"

export default function payment(b){
    let style = `
        {
            width:100%;
            height:100%;
        }`
    
    const payment = cE("div", style)
    payment.appendChild(scroller(b))
    return(payment)
}