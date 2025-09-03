import head from "./head/main.js"
import content from "./content/main.js"

export default function window(id){
    let style = `
        {
            position:fixed;
            top:1%;
            left:1%;

            display:flex;
            flex-direction:column;
            align-items:center;
            width:98%;
            height:98%;
            background:var(--colorWhite);
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
            overflow:hidden;
            transform:scale(0);
            transition:transform 0.5s;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(content(id))
    return(window)
}