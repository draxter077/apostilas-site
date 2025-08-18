export default function title(t){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlack);
            max-height:50px;
            width:100%;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}