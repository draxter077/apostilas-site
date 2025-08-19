export default function logo(){
    let style = `
        {
            height:60px;
            margin:0px 15px 0px 0px;
            background:var(--colorWhite);
            border-radius:100%;
        }
        :responsive{
            height:40px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}