export default function qrCode(){
    let style = `
        {
            height:30%;
            aspect-ratio:1;
            box-shadow:0px 0px 1px 0px black;
            background:black;
        }
        :responsive{
            height:30%;
        }`

    const qrCode = cE("img", style)
    return(qrCode)
}