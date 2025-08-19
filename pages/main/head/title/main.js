import logo from "./logo/main.js"
import name from "./name/main.js"

export default function title(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const title = cE("div", style)
    title.appendChild(logo())
    title.appendChild(name())
    return(title)
}