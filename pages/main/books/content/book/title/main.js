export default function title(t){
    let style = `
        {
            font-size:14px;
            color:var(--colorWhite);
            max-height:55px;
            width:100%;
            overflow:hidden;
        }
        :responsive{
            font-size:12px;
            max-height:45px;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}