import head from "./head/main.js"
import books from "./books/main.js"
import about from "./about/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(books())
    main.appendChild(about())
    return(main)
}