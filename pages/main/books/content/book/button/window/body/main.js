import product from "./product/main.js"
import payment from "./payment/main.js"

export default function body(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            padding:10px 0px 0px 0px;
            height:100%;
            width:100%;
        }`

    const body = cE("div", style)
    body.appendChild(product(b))
    body.appendChild(payment(b))
    return(body)
}