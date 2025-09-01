export default function title(b){
    let style = `
        {
            font-size:17px;
            color:var(--colorBlack);
            overflow-x:scroll;
            max-height:100%;
            text-align:center;
        }
        :responsive{
            width:45%;
            font-size:12px;
        }`

    const title = cE('div', style)
    title.innerHTML = `${b.title}<br>(${b.pages} páginas)`
    return(title)
}