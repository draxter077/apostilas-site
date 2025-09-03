export default function content(t){
    let style = `
        {
            font-size:17px;
            color:black;
            overflow-y:scroll;
            width:30%;
            padding:0px 5px 0px 0px;
            max-height:100%;
            text-align:justify;
        }
        :responsive{
            font-size:12px;
            width:60%;
        }
        ::-webkit-scrollbar-thumb{
            background:var(--colorBlue);
        }`

    const content = cE('div', style)
    content.innerHTML = t
    return(content)
}