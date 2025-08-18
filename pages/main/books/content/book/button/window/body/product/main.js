import img from "./img/main.js"
import title from "./title/main.js"
import content from "./content/main.js"
import price from "./price/main.js"

export default function product(b){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            height:20%;
            padding:5px 0px;
            border-bottom:1px solid black;
        }`

    const product = cE("div", style)
    product.appendChild(img(b))
    product.appendChild(title(b.title))
    product.appendChild(content(b.content))
    product.appendChild(price(b.price))
    return(product)
}