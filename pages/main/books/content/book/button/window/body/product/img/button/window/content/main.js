export default function content(id){
    let style = `
        {
            width:100%;
            height:100%;
        }`
    
    const content = cE("iframe", style)
    content.src = `https://apostilas.ph.net.br/assets/preview/${id}.pdf`
    content.title = "Prévia"
    return(content)
}