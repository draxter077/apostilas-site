export default function content(t){
    let style = `
        {
            font-size:17px;
            color:black;
            overflow-x:scroll;
            width:30%;
            max-height:100%;
            text-align:justify;
        }`

    const content = cE('div', style)
    content.innerHTML = t
    return(content)
}