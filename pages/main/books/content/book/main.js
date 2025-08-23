import img from "./img/main.js"
import content from "./content/main.js"

export default function book(b){
    let style = `
        {
            position:relative;

            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:center;
            height:49%;
            width:200px;
            margin:0px 5px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
            overflow:hidden;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }`

    const book = cE("div", style)
    book.title = b.title
    book.appendChild(img(b.src))
    book.appendChild(content(b))
    return(book)
}