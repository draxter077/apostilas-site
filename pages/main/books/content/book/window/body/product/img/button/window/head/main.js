import button from "./button/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            height:fit-content;
            padding:0px 10px;
        }`

    const head = cE("div", style)
    head.appendChild(button())
    return(head)
}