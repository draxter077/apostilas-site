export default function qrCode(){
    let style = `
        {
            height:30%;
            aspect-ratio:1;
        }
        :responsive{
            height:30%;
        }`

    const qrCode = cE("img", style)
    return(qrCode)
}