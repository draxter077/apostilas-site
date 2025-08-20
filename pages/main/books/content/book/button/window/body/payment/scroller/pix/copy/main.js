export default function copy(){
    let style = `
        {
            font-size:17px;
            color:var(--colorWhite);
            width:80%;
            text-align:center;
            user-select:text;
        }
        :responsive{
            font-size:12px;
            width:90%;
        }`

    const copy = cE("div", style)
    copy.innerHTML = ""
    return(copy)
}