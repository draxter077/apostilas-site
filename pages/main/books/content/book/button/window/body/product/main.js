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
            height:30%;
            padding:5px 0px;
            background:var(--colorWhite);
            border-radius:5px;
        }
        :responsive{
            flex-wrap:wrap;
            overflow-y:scroll;
        }
        ::-webkit-scrollbar-thumb{
            background:var(--colorBlack);
        }`

    const product = cE("div", style)
    product.appendChild(img(b))
    product.appendChild(title(b.title))
    product.appendChild(price(b.price))
    product.appendChild(content(b.content))
    return(product)
}