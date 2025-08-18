export default function title(t){
    let style = `
        {
            font-size:17px;
            color:black;
            overflow-x:scroll;
            width:30%;
            max-height:100%;
        }`

    const title = cE('div', style)
    title.innerHTML = t
    return(title)
}