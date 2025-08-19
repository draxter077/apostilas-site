export default function button(b){
    let style = `
        {
            font-size:15px;
            background:var(--colorOrange);
            padding:2px 5px;
            border-radius:5px;
            color:white;
            margin:5px 0px 0px 0px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :responsive{
            font-size:10px;
        }
        :hover{
            background:var(--colorBlack);
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