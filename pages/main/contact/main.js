import link from "./link/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:80%;
            margin:7.5vh 0px 0px 0px;
        }
        :responsive{
            flex-wrap:wrap;
            width:95%;
        }`

    const contact = cE("div", style)
    contact.id = "Contato"
    contact.appendChild(link("var(--colorOrange)", "email", "contato@ph.net.br"))
    contact.appendChild(link("var(--colorYellow)", "whatsapp", "(41) 99501-4187"))
    contact.appendChild(link("var(--colorGreen)","instagram", "@PhWebSoftware"))
    return(contact)
}