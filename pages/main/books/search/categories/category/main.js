import img from "./img/main.js"
import title from "./title/main.js"

export default function category(t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:35px;
            padding:5px 7px;
            margin:5px 2px;
            background:var(--colorBlue);
            box-shadow:0px 0px 1px 0px var(--colorBlue);
            border-radius:5px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :responsive{
            height:25px;
        }
        :hover{
            transform:translateY(-10%);
        }`

    const category = cE("div", style)
    category.appendChild(img(`/assets/${t.toLowerCase()}.png`))
    category.appendChild(title(t))
    
    category.addEventListener(
        "click",
        (e) => {
            let input = e.target.parentElement.parentElement.parentElement.children[0]
            input.value = t
            input.click()
        }
    )
    return(category)
}