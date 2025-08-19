import img from "./img/main.js"
import title from "./title/main.js"

export default function link(c, type, t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:30%;
            aspect-ratio:2;
            border-radius:10px;
            box-shadow:0px 0px 2px 2px ${c};
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