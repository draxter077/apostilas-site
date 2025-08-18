export default function input(){
    let style = `
        {
            font-size:20px;
            padding:2px 10px;
            margin:0px 0px 5px 0px;
            border-bottom:1px solid var(--colorBlack);
            width:100%;
        }
        :responsive{
            font-size:15px;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input", style)
    input.placeholder = "Pesquise apostilas..."
    return(input)
}