import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            font-size:15px;
            background:var(--colorBlue);
            padding:2px 5px;
            border-radius:5px;
            color:var(--colorWhite);
            margin:5px 0px 0px 0px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :responsive{
            font-size:10px;
        }
        :hover{
            transform:translateY(-10%);
        }`

    const button = cE("button", style)
    button.innerHTML = "Veja as cinco primeiras páginas"
    button.addEventListener(
        "click",
        async () => {
            let w = window(b.id)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, ))
            w.style.transform = "scale(1)"
        }
    )
    return(button)
}