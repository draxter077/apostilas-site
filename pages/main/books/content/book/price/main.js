export default function price(p){
    let style = `
        {
            font-size:25px;
            color:black;
        }`

    const price = cE("div", style)
    price.innerHTML = stringifyNumber(p)
    return(price)
}