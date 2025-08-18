import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            font-size:12px;
            padding:5px 10px;
            border-radius:5px;
            background:blue;
            color:white;
            width:100%;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:orange;
        }`

    const button = cE("button", style)
    button.innerHTML = "Comprar"
    button.addEventListener(
        "click",
        async () => {
            let w = window(b)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 5))
            w.style.transform = "translateX(0%)"
            document.body.style.overflow = "hidden"
        }
    )
    return(button)
}