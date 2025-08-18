import img from "./img/main.js"
import title from "./title/main.js"

export default function category(t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:35px;
            padding:5px 7px;
            margin:5px 2px;
            background:blue;
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :responsive{
            height:25px;
        }
        :hover{
            background:orange;
        }`

    const category = cE("div", style)
    category.appendChild(img(`/assets/${t.toLowerCase()}.png`))
    category.appendChild(title(t))
    return(category)
}