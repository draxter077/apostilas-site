import head from "./head/main.js"
import product from "./product/main.js"
import faq from "./faq/main.js"
import contact from "./contact/main.js"
import about from "./about/main.js"
import foot from "./foot/main.js"

import books from "../../books.js"

export default function apostila(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const apostila = cE("div", style)
    let b = books[Number(id)]

    apostila.appendChild(head())
    apostila.appendChild(product(b))
    apostila.appendChild(contact())
    apostila.appendChild(faq())
    apostila.appendChild(about())
    apostila.appendChild(foot())

    window.addEventListener("load", () => apostila.style.opacity = 1)
    return(apostila)
}