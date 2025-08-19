export default function img(c, t){
    let style = `
        {
            width:75px;
            filter:${c == "var(--colorYellow)" ? "invert(0)" : "invert(1)"};
        }
        :responsive{
            width:50px;
        }`

    const img = cE("img", style)
    img.src = `https://www.ph.net.br/assets/${t}.png`
    return(img)
}