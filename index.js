
//MATRIZ TRANSPOSTA

function InícioMatrizTransposta(){      //NÚMERO DE LINHAS E COLUNAS DA MATRIZ 

    document.getElementById("escolha").innerHTML += `<br>

    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas <input type="number"  id="linhas" /><br>
            Digite o número de colunas <input type="number"  id="colunas" /><br> 
        </div>
    </div>

    <div class="container">
        <button class="buttonEnviar" onClick="montarMatrizTransposta()"> Enviar </button>
    </div>

    <div id="título-input"></div> 

    <div class="container">
        <div id="input-array"></div>
    </div>

    <div id="títuloMatrizTransposta"></div>

    <div class="container">
        <div id="MatrizT"></div>
    </div>

    <div id="buttonVoltar"></div>
`
}

function montarMatrizTransposta(){   //MONTA O INPUT  

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
        }
        document.getElementById("input-array").innerHTML += `<br>`
    }
    document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" class="buttonEnviar" onClick="resultadoMatrizTransposta()" >Enviar</button> </div>'
}

function resultadoMatrizTransposta(){ //MONTA O MATRIZ TRANSPOSTA  

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);
  
   /*for(var i = 1; i <= numLinhas; i++){

        for(var j = 1; j <= numColunas; j++){
            
            let valor;

            if(j == numColunas){
                valor = `${document.getElementById(`array[${i}][${j}]`).value}`;
                //document.getElementById("array").innerHTML += `${valor}<br>`
            }
            else{
                valor = `${document.getElementById(`array[${i}][${j}]`).value}`;
                //document.getElementById("array").innerHTML += `${valor}, `

            }
            console.log(` Matriz[${i}][${j}] = ${valor}`); 
        } 
    }*/

    console.log(` Matriz Transposta`); 

    document.getElementById("títuloMatrizTransposta").innerHTML += `<br><center><h2>Matriz Transposta</h2></center>`

    var aux = numLinhas
    numLinhas = numColunas;
    numColunas = aux;

    for(var i = 1; i <= numLinhas; i++){

        for(var j = 1; j <= numColunas; j++){
            
            let valor;

            if(j == numColunas){
                valor = `${document.getElementById(`array[${j}][${i}]`).value}`;
                document.getElementById("MatrizT").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/> <br>`
            }
            else{
                valor = `${document.getElementById(`array[${j}][${i}]`).value}`;
                document.getElementById("MatrizT").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/>`

            }
            console.log(` MatrizT[${j}][${i}] = ${valor}`); 
        } 
    } 

    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'

}

function Voltar(){
    document.getElementById("escolha").innerHTML = ``
}



