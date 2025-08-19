import photo from "./photo/main.js"
import button from "./button/main.js"

export default function img(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            height:100%;
        }`

    const img = cE("div", style)
    img.appendChild(photo(b.src))
    img.appendChild(button(b))
    return(img)
}