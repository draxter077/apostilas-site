export default function name(){
    let style = `
        {
            font-size:40px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:25px;
        }`

    const name = cE("div", style)
    name.innerHTML = "Apostilas"
    return(name)
}