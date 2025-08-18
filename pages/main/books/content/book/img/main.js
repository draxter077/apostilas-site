export default function img(src){
    let style = `
        {
            height:60%;
            border-radius:5px;
        }
        :responsive{
            height:40%;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}