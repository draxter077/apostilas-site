export default function disclaimer(){
    let style = `
        {
            font-size:17px;
            color:black;
            width:80%;
            text-align:justify;
        }
        :responsive{
            font-size:12px;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Aqui estão as instruções de pagamento. Elas também foram enviadas pelo seu e-mail. Confirme que recebeu antes de continuar (verifique seu spam).<br>Em até 24h úteis após o pagamento, você receberá por e-mail a sua apostila! Quaisquer dúvidas, entre em contato pelo e-mail, WhatsApp ou Instagram, cujos links estão disponíveis ao longo dessa página e no e-mail enviado."
    return(disclaimer)
}