export default function name(){
    let style = `
        {
            font-size:40px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:25px;
            margin:0px 0px 10px 0px;
        }`

    const name = cE("div", style)
    name.innerHTML = "Apostilas"
    return(name)
}