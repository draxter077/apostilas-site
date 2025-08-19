export default function title(c, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}