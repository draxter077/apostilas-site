export default function disclaimer(){
    let style = `
        {
            font-size:17px;
            color:var(--colorWhite);
            width:80%;
            text-align:center;
        }
        :responsive{
            font-size:12px;
            width:90%;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Aqui estão as instruções de pagamento PIX, que também foram enviadas pelo seu e-mail.<br>Em até 24h úteis após o pagamento, você receberá a sua apostila pelo e-mail (verifique seu spam!). Caso algo dê errado, entraremos em contato via WhatsApp ou e-mail.<br>Quaisquer dúvidas, entre em contato pelos links que estão disponíveis ao longo dessa página e no e-mail enviado."
    return(disclaimer)
}