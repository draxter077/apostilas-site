export default function title(){
    let style = `
        {
            font-size:30px;
            color:black;
        }
        :responsive{
            font-size:25px;
            margin:0px 0px 10px 0px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Prof. Adão José"
    return(title)
}