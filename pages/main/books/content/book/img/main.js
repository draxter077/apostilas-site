export default function img(src){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            z-index:-1;
            border-radius:5px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}