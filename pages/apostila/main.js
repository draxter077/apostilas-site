import books from "../../books.js"

export default function apostila(id){
    let style = `
        {
            width:100%;
            height:100%;
            font-size:40px;
            color:var(--colorWhite);
        }`

    const apostila = cE("div", style)

    let b = books[Number(id)]
    apostila.innerHTML = b.title
    return(apostila)
}