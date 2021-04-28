function montar(){

    let numLinhas = parseFloat(document.getElementById("num1").value);
    let numColunas = parseFloat(document.getElementById("num2").value);

    document.getElementById("mxn").textContent = `Matriz = ${numLinhas} X ${numColunas} | Insira os valores da matriz `

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            document.getElementById("input-array").innerHTML += `<input type="text" id="array[${i}][${j}]"/>`
        }
        document.getElementById("input-array").innerHTML += `<br>`
    }
    document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" class="button" onClick="buscar()" >Enviar</button> </div>'
}

function buscar(){

    let numLinhas = parseFloat(document.getElementById("num1").value);
    let numColunas = parseFloat(document.getElementById("num2").value);
  
    for(var i = 1; i <= numLinhas; i++){

        for(var j = 1; j <= numColunas; j++){
            
            let valor;

            if(j == numColunas){
                valor = `${document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("array").innerHTML += `${valor}<br>`
            }
            else{
                valor = `${document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("array").innerHTML += `${valor}, `

            }
            console.log(` Matriz[${i}][${j}] = ${valor}`); 
        } 
    }
}