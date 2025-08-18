import input from "./input/main.js"
import categories from "./categories/main.js"

export default function search(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            width:100%;
        }`

    const search = cE("div", style)
    search.appendChild(input())
    search.appendChild(categories())
    return(search)
}