export default function button(b){
    let style = `
        {
            font-size:15px;
            background:blue;
            padding:2px 5px;
            border-radius:5px;
            color:white;
            margin:5px 0px 0px 0px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:orange;
        }`

    const button = cE("button", style)
    button.innerHTML = "Veja algumas páginas"
    button.addEventListener(
        "click",
        () => {
            let link = document.createElement('a');
            link.href = "https://apostilas.ph.net.br/preview/" + b.id + ".pdf"
            link.download = b.title
            link.click()
        }
    )
    return(button)
}