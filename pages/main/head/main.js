import title from "./title/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px;
            background:var(--colorOrange);
            box-shadow:0px 0px 5px 0px var(--colorOrange);
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.appendChild(title())
    head.appendChild(links())
    return(head)
}