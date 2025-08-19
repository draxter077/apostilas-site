export default function link(t){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            margin:0px 10px;
            padding:2px 5px;
            cursor:pointer;
        }
        :responsive{
            font-size:15px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:1px;
            background:var(--colorWhite);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => document.getElementById(t).scrollIntoView({behavior:"smooth"}))
    return(link)
}