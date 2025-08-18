import category from "./category/main.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
        }`

    const categories = cE("div", style)
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    categories.appendChild(category("Matemática"))
    return(categories)
}