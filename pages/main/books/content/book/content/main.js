import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function content(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorWhite);
            box-shadow:0px 0px 10px 10px var(--colorWhite);
            padding:0px 10px 10px 10px;
        }`

    const content = cE("div", style)
    content.appendChild(title(b.title))
    content.appendChild(price(b.price))
    content.appendChild(button(b))
    return(content)
}