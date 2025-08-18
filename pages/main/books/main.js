import search from "./search/main.js"
import content from "./content/main.js"

export default function books(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            height:100svh;
            margin:5vh 0px;
        }`

    const books = cE("div", style)
    books.id = "Apostilas"
    books.appendChild(search())
    books.appendChild(content())
    return(books)
}