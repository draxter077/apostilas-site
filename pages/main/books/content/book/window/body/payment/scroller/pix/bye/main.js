export default function bye(){
    let style = `
        {
            font-size:17px;
            color:var(--colorWhite);
            width:80%;
            text-align:center;
        }
        :responsive{
            font-size:12px;
            width:95%;
        }`

    const bye = cE("div", style)
    bye.innerHTML = "Esperamos que tenha tido uma ótima experiência!<br>Quaisquer dúvidas, reclamações ou sugestões, entre em contato pelos links que estão disponíveis ao longo dessa página e no e-mail enviado."
    return(bye)
}