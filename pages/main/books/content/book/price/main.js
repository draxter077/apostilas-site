export default function price(p){
    let style = `
        {
            font-size:25px;
            color:black;
        }
        :responsive{
            font-size:18px;
        }`

    const price = cE("div", style)
    price.innerHTML = stringifyNumber(p)
    return(price)
}