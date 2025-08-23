export default function title(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
            max-height:50px;
            width:100%;
            overflow:hidden;
        }
        :responsive{
            font-size:15px;
            max-height:43px;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}