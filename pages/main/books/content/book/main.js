import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function book(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:49%;
            width:200px;
            margin:0px 5px;
            padding:10px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
        }
        :responsive{
            width:120px;
        }`

    const book = cE("div", style)
    book.title = b.title
    book.appendChild(img(b.src))
    book.appendChild(title(b.title))
    book.appendChild(price(b.price))
    book.appendChild(button(b))
    return(book)
}