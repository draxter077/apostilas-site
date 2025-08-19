export default function title(c, t){
    let style = `
        {
            font-size:20px;
            color:${c == "var(--colorYellow)" ? "var(--colorBlack)" : "var(--colorWhite)"};
            margin:10px 0px 0px 0px;
        }
        :responsive{
            font-size:15px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}