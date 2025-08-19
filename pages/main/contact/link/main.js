import img from "./img/main.js"
import title from "./title/main.js"

export default function link(c, type, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:30%;
            aspect-ratio:2;
            border-radius:10px;
            background:${c};
        }
        :responsive{
            width:80%;
            margin:5px 0px;
        }`

    const link = cE("div", style)
    link.appendChild(img(c, type))
    link.appendChild(title(c, t))
    return(link)
}