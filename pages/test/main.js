export default function test(){
    let style = `
        {
            width:100%;
            height:100%;
            color:white;
        }`

    const test = cE("iframe", style)
    test.src = "https://mpago.li/25ce42Y"
    return(test)
}
    