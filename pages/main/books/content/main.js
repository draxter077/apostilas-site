import books from "./books.js"
import book from "./book/main.js"

export default function content(p){
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

    window.addEventListener(
        "load",
        () => {
            if(p != undefined){
                for(let i = 0; i < content.children.length; i++){
                    let c = content.children[i]
                    if(p.split("_")[0] == c.id){c.children[3].click();break}
                }
            }
        }
    )
    return(content)
}