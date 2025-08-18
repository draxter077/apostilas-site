export default function title(t){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlack);
            max-height:50px;
            width:100%;
        }
        :responsive{
            font-size:10px;
            max-height:40px;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}