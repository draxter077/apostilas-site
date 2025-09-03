import logo from "./logo/main.js"
import name from "./name/main.js"

export default function title(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }
        :responsive{
            margin:0px 0px 10px 0px;
        }`

    const title = cE("div", style)
    title.appendChild(logo())
    title.appendChild(name())
    return(title)
}