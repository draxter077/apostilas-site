export default function img(c, t){
    let style = `
        {
            height:50px;
            margin:0px 10px 0px 0px;
            filter:invert(0);
        }
        :responsive{
            height:40px;
        }`

    const img = cE("img", style)
    img.src = `https://www.ph.net.br/assets/${t}.png`
    return(img)
}