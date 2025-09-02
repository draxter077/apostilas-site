export default function title(t){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            max-height:58px;
            width:100%;
            overflow:hidden;
        }
        :responsive{
            font-size:12px;
            max-height:46px;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}