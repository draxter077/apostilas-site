import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            border-radius:5px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            width:100%;
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            font-size:12px;
        }
        :hover{
            background:var(--colorWhite);
            color:var(--colorBlack);
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