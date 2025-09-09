export default function disclaimer(){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            margin:0px 0px 10px 0px;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Esta é uma amostra do seu produto"
    return(disclaimer)
}