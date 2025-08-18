export default function title(t){
    let style = `
        {
            font-size:14px;
            color:white;
        }
        :responsive{
            font-size:11px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}