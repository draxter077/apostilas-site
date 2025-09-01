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
    disclaimer.innerHTML = "Aqui estão as instruções de pagamento PIX, que também foram enviadas para seu e-mail (lembre de verificar sua caixa de spam). Aponte sua câmera para o QR Code ou copie e cole o código PIX abaixo no aplicativo do seu banco.<br>Em até 24 horas após o pagamento, você receberá a sua apostila em seu WhatsApp.<br>Muito obrigado pela sua compra!<br>Esperamos que tenha tido uma ótima experiência<br>Quaisquer dúvidas, reclamações ou sugestões, entre em contato pelos links que estão disponíveis ao longo dessa página e no e-mail enviado."
    return(disclaimer)
}