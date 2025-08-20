export default function content(t){
    let style = `
        {
            font-size:17px;
            color:black;
            overflow-y:scroll;
            width:30%;
            max-height:100%;
            text-align:justify;
        }
        :responsive{
            font-size:12px;
            width:60%;
        }
        ::-webkit-scrollbar-thumb{
            background:var(--colorBlack);
        }`

    const content = cE('div', style)
    content.innerHTML = t
    return(content)
}