export default function qrCode(){
    let style = `
        {
            height:30%;
            aspect-ratio:1;
            padding:10px;
            background:var(--colorWhite);
            border-radius:10px;
        }
        :responsive{
            height:30%;
        }`

    const qrCode = cE("img", style)
    return(qrCode)
}