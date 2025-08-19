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
            margin:0px 0px 15px 0px;
        }
        :responsive{
            flex-direction:column;
            max-height:120px;
            overflow-x:scroll;
        }`

    const categories = cE("div", style)
    categories.appendChild(category("Português"))
    categories.appendChild(category("Redação"))
    categories.appendChild(category("História"))
    categories.appendChild(category("Geografia"))
    categories.appendChild(category("Sociologia"))
    categories.appendChild(category("Filosofia"))
    categories.appendChild(category("Religião"))
    categories.appendChild(category("Biologia"))
    categories.appendChild(category("Física"))
    categories.appendChild(category("Química"))
    categories.appendChild(category("Matemática"))
    return(categories)
}