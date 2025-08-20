export default function photo(src){
    let style = `
        {
            height:60%;
            border-radius:5px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}