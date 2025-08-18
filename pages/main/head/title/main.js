export default function title(){
    let style = `
        {
            font-size:30px;
            color:black;
        }`

    const title = cE("div", style)
    title.innerHTML = "Prof. Adão José"
    return(title)
}