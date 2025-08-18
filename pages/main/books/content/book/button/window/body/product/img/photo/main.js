export default function photo(src){
    let style = `
        {
            height:80%;
            box-shadow:0px 0px 1px 0px black;
            border-radius:5px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}