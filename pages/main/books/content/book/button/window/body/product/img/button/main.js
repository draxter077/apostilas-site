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
    button.innerHTML = "Veja uma amostra de dentro"
    button.addEventListener(
        "click",
        () => {
            let link = document.createElement('a');
            link.href = "https://apostilas.ph.net.br/assets/preview/" + b.id + ".pdf"
            link.download = b.title + ".pdf"
            link.target = "_blank"
            link.click()
        }
    )
    return(button)
}