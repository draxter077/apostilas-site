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
    disclaimer.innerHTML = "Para completar o pedido, insira seu nome, e-mail e telefone. Essas informações são necessárias para podermos enviar o PDF da apostila para você e entrar em contato caso algo dê errado"
    return(disclaimer)
}