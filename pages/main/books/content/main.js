import books from "./books.js"
import book from "./book/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;
            overflow-x:scroll;
            width:100%;
            height:100%;
            padding:10px 0px;
        }`

    const content = cE("div", style)
    for(let i = 0; i < books.length; i++){content.appendChild(book(books[i]))}
    return(content)
}