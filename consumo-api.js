(() => {
    const $requestAxios = document.getElementById("requestAxios");
    $fragmento = document.createDocumentFragment();


axios.get("https://jsonplaceholder.typicode.com/users")

    .then((res)=>{
    console.log(res);
        let jsondata = res.data;
        jsondata.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML=`
            <b>${element.name}</b><br>
            • E-mail: ${element.email}<br>
            • Tel/cel: ${element.phone}<br>
            • Web: ${element.website}`
            $fragmento.appendChild($li);
            console.log($fragmento)
        });
        
        $requestAxios.appendChild($fragmento);
    })        

    .catch((err)=>{
        let mensaje = err.statusText || "Oops";
        $requestAxios.innerHTML=`ERROR ${err.status}:${mensaje}`;
    
})
    .finally()
        console.log("Esta linea se imprime igual")
    


})();