import head from "./head/main.js"
import books from "./books/main.js"
import about from "./about/main.js"
import contact from "./contact/main.js"
import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(books())
    main.appendChild(about())
    main.appendChild(contact())
    main.appendChild(foot())

    window.addEventListener("load", () => main.style.opacity = 1)
    return(main)
}