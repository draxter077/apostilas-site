import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"
import window from "./window/main.js"

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
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            width:150px;
        }
        :hover{
            transform:scale(1.05);
            box-shadow:0px 0px 2px 0px var(--colorYellow);
        }
        :hover>button{
            background:var(--colorYellow);
        }`

    const book = cE("div", style)
    book.id = b.id
    book.title = b.title
    book.appendChild(img(b.src))
    book.appendChild(title(b.title))
    book.appendChild(price(b.price))
    book.appendChild(button())

    book.addEventListener(
        "click",
        async () => {
            document.defaultView.history.pushState('','',`?${b.id}_${b.title.replaceAll(" ","_")}`)

            let w = window(b)
            document.body.style.overflow = "hidden"
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 5))
            w.style.transform = "translateX(0%)"
        }
    )
    return(book)
}