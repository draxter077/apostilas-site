import head from "./head/main.js"
import body from "./body/main.js"

export default function window(b){
    let style = `
        {
            position:fixed;
            top:1%;
            left:1%;
            display:flex;
            flex-direction:column;
            width:98%;
            height:98%;
            background:var(--colorWhite);
            box-shadow:0px 0px 50px 0px var(--colorBlack);
            border-radius:5px;
            padding:10px 15px;
            transform:translateX(-100%);
            transition:transform 0.5s;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(body(b))
    return(window)
}