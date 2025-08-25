export default function title(t){
    let style = `
        {
            font-size:17px;
            color:var(--colorBlack);
            overflow-x:scroll;
            max-height:100%;
        }
        :responsive{
            width:45%;
            font-size:12px;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}