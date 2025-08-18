export default function input(t){
    let style = `
        {
            width:100%;
            border-bottom:1px solid blue;
            padding:5px 10px;
            font-size:17px;
            margin:5px 0px;
            transition:border-bottom 0.5s;
        }
        :responsive{
            font-size:14px;
        }
        :hover,:focus{
            border-bottom:1px solid orange;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input", style)
    input.placeholder = t
    if(t == "Telefone"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll(" ","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    if(i == 0){nS += "("}
                    nS += c
                    if(i != v.length - 1){
                        if(i == 2){nS += ") "}
                        else if(i == 7){nS += "-"}
                    }
                    if(i > 11){break}
                    e.target.value = nS
                }
            }
        )
    }
    return(input)
}