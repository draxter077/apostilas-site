export default function title(t){
    let style = `
        {
            font-size:14px;
            color:white;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}