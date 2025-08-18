export default function copy(){
    let style = `
        {
            font-size:17px;
            color:black;
            width:80%;
            text-align:justify;
            usre-select:text;
        }
        :responsive{
            font-size:12px;
        }`

    const copy = cE("div", style)
    copy.innerHTML = ""
    return(copy)
}