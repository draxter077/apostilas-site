export default function content(id){
    let style = `
        {
            width:100%;
            height:100%;
        }`
    
    const content = cE("iframe", style)
    content.src = `https://docs.google.com/viewer?url=https://www.licenos.com.br/assets/preview/${id}.pdf&embedded=true`
    return(content)
}