import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const links = cE("div", style)
    links.appendChild(link("Apostilas"))
    links.appendChild(link("Sobre"))
    links.appendChild(link("Contato"))
    return(links)
}