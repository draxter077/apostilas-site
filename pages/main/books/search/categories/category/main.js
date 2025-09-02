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
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            height:25px;
        }
        :hover{
            transform:translateY(-10%);
            background:var(--colorYellow);
        }`

    const category = cE("div", style)
    category.appendChild(img(`/assets/elements/${t.toLowerCase()}.png`))
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