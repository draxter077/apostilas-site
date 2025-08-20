export default function input(){
    let style = `
        {
            font-size:20px;
            padding:2px 10px;
            margin:0px 0px 15px 0px;
            width:50%;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorBlack);
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            background:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            width:80%;
        }
        ::placeholder{
            font-style:italic;
            color:var(--colorBlack);
        }`

    const input = cE("input", style)
    input.placeholder = "Pesquise apostilas..."

    function a(e){
        let v = e.target.value
        let books = e.target.parentElement.parentElement.children[1].children
        for(let i = 0; i < books.length; i++){
            let b = books[i]
            if(b.title.toLowerCase().includes(v.toLowerCase())){b.style.display = "flex"}
            else{b.style.display = "none"}
            if(v.length == 0){b.style.display = "flex"}
        }
    }
    input.addEventListener("input", (e) => a(e))
    input.addEventListener("click", (e) => a(e))
    return(input)
}