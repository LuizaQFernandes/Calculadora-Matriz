
//MATRIZ TRANSPOSTA

function InícioMatrizTransposta(){      //NÚMERO DE LINHAS E COLUNAS DA MATRIZ 

    document.getElementById("OP4").disabled = true; //DESATIVANDO BOTÔES DAS OUTRAS OPÇÕES
    document.getElementById("OP2").disabled = true;
    document.getElementById("OP3").disabled = true;

    document.getElementById("escolha").innerHTML += `<br>

    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas <input type="number"  id="linhas" /><br>
            Digite o número de colunas <input type="number"  id="colunas" /><br> 
        </div>
    </div>

    <div class="container">
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montarMatrizTransposta()"> Enviar </button>
        
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

    document.getElementById("buttonEnviarInput").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
        }
        document.getElementById("input-array").innerHTML += `<br>`
    }
    document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" id="buttonMontarMatriz" class="buttonEnviar" onClick="resultadoMatrizTransposta()" >Enviar</button> </div>'
}

function resultadoMatrizTransposta(){ //MONTA A MATRIZ TRANSPOSTA  

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("colunas").value); //INVERTENDO LINHAS E COLUNAS
    let numColunas = parseFloat(document.getElementById("linhas").value);

    console.log(` Matriz Transposta`); 

    document.getElementById("títuloMatrizTransposta").innerHTML += `<br><center><h2>Matriz Transposta</h2></center>`

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

//MATRIZ OPOSTA

function InícioMatrizOposta(){      //NÚMERO DE LINHAS E COLUNAS DA MATRIZ 

    document.getElementById("OP1").disabled = true; //DESATIVANDO BOTÔES DAS OUTRAS OPÇÕES
    document.getElementById("OP2").disabled = true;
    document.getElementById("OP3").disabled = true;

    document.getElementById("escolha").innerHTML += `<br>

    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas <input type="number"  id="linhas" /><br>
            Digite o número de colunas <input type="number"  id="colunas" /><br> 
        </div>
    </div>

    <div class="container">
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montarMatrizOposta()"> Enviar </button>
    </div>

    <div id="título-input"></div> 

    <div class="container">
        <div id="input-array"></div>
    </div>

    <div id="títuloMatrizOposta"></div>

    <div class="container">
        <div id="MatrizO"></div>
    </div>

    <div id="buttonVoltar"></div>
`
}

function montarMatrizOposta(){   //MONTA O INPUT  

    document.getElementById("buttonEnviarInput").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
        }
        document.getElementById("input-array").innerHTML += `<br>`
    }
    document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" id="buttonMontarMatriz" class="buttonEnviar" onClick="resultadoMatrizOposta()" >Enviar</button> </div>'
}

function resultadoMatrizOposta(){ //MONTA O MATRIZ OPOSTA

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    console.log(` Matriz Oposta`); 

    document.getElementById("títuloMatrizOposta").innerHTML += `<br><center><h2>Matriz Oposta</h2></center>`

    for(var i = 1; i <= numLinhas; i++){

        for(var j = 1; j <= numColunas; j++){
            
            let valor;

            if(j == numColunas){
                valor = -1 * `${document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("MatrizO").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/> <br>`
            }
            else{
                valor =  -1 * `${document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("MatrizO").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/>`

            }
            console.log(` MatrizO[${i}][${j}] = ${valor}`); 
        } 
    } 

    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'

}

//MATRIZ MULTIPLICADA POR NÚMERO REAL

function InícioMatrizMult(){   
    
    document.getElementById("OP4").disabled = true; //DESATIVANDO BOTÔES DAS OUTRAS OPÇÕES
    document.getElementById("OP2").disabled = true;
    document.getElementById("OP1").disabled = true;

    document.getElementById("escolha").innerHTML += `<br>
    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas <input type="number"  id="linhas" /><br>
            Digite o número de colunas <input type="number"  id="colunas" /><br> <br>
            Digite o número pelo qual deseja multiplicar a Matriz <input type="number" id="num">
        </div>
    </div>

    <div class="container">
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montarMatriz()"> Enviar </button>
    </div>

    <div id="título-input"></div> 

    <div class="container">
        <div id="input-array"></div>
    </div>

    <div id="títuloMatrizMulti"></div>

    <div class="container">
        <div id="MatrizM"></div>
    </div>
    
    <div id="buttonVoltar"></div>
`
}

//MONTA O MATRIZ

function montarMatriz(){   

    document.getElementById("buttonEnviarInput").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
        }
        document.getElementById("input-array").innerHTML += `<br>`
    }
    document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" class="buttonEnviar" id="buttonMontarMatriz" onClick="resultadoMatrizMult()" >Enviar</button> </div>'
}

//MOSTRA RESULTADO

function resultadoMatrizMult(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);
    let num = parseFloat(document.getElementById("num").value);

    console.log(` Matriz Multiplicação`); 

    document.getElementById("títuloMatrizMulti").innerHTML += `<br><center><h2>Matriz Multiplicada</h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
            
            let valor;

            if(j == numColunas){
                valor = `${num * document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("MatrizM").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/> <br>`
            }
            else{
                valor =  `${num * document.getElementById(`array[${i}][${j}]`).value}`;
                document.getElementById("MatrizM").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/>`
            }
            console.log(` MatrizM[${i}][${j}] = ${valor}`); 
        } 
    } 

    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'

}

//MULTIPLICAÇÃO DE DUAS MATRIZES

function InícioMatrizMultMatriz(){ 
    
    document.getElementById("OP4").disabled = true; //DESATIVANDO BOTÔES DAS OUTRAS OPÇÕES
    document.getElementById("OP3").disabled = true;
    document.getElementById("OP1").disabled = true;

    document.getElementById("escolha").innerHTML += `<br>
    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas da 1ª Matriz <input type="number"  id="linhas1" /><br>
            Digite o número de colunas da 1ª Matriz <input type="number"  id="colunas1" /><br>
        </div>
    </div>
    <br>
    <div class="container">
        <div>
            Digite o número de linhas da 2ª Matriz <input type="number"  id="linhas2" /><br>
            Digite o número de colunas da 2ª Matriz <input type="number"  id="colunas2" /><br>
        </div>
    </div>    
    
    <div class="container">
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montar2Matriz()"> Enviar </button>
    </div>

    <div class="container">
        <div id="erro"></div>
    </div>

    <div id="título-input1"></div> 

    <div class="container">
        <div id="input-array1"></div>
    </div>

    <div id="título-input2"></div> 

    <div class="container">
        <div id="input-array2"></div>
    </div>

    <div id="títuloMatrizMM"></div>

    <div class="container">
        <div id="MatrizMM"></div>
    </div>
    <div id="buttonVoltar"></div>
`
}

function montar2Matriz(){  
    
    document.getElementById("buttonEnviarInput").disabled = true

    let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
    let numColunas1 = parseFloat(document.getElementById("colunas1").value);
    let numLinhas2 = parseFloat(document.getElementById("linhas2").value);
    let numColunas2 = parseFloat(document.getElementById("colunas2").value);

    if(numColunas1 !== numLinhas2){
        document.getElementById("erro").innerHTML += `<p>Erro ao multiplicar as Matrizes! O número de colunas da Matriz 1 é diferente do número de linhas da Matriz 2`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{
        document.getElementById("título-input1").innerHTML += `<center><h2>Insira os valores 1ª Matriz </h2></center>`

        for(var i = 1; i <= numLinhas1; i++){
            for(var j = 1; j <= numColunas1; j++){
                document.getElementById("input-array1").innerHTML += `<input type="number" id="array1[${i}][${j}]"/>`
            }
            document.getElementById("input-array1").innerHTML += `<br>`
        }
    
        document.getElementById("título-input2").innerHTML = `<center><br><h2>Insira os valores 2ª Matriz <br> </h2></center>`
    
        for(var i = 1; i <= numLinhas2; i++){
            for(var j = 1; j <= numColunas2; j++){
                document.getElementById("input-array2").innerHTML += `<input type="number" id="array2[${i}][${j}]"/>`
            }
            document.getElementById("input-array2").innerHTML += `<br>`
        }
        document.getElementById("input-array2").innerHTML += '<div class="container"><button type="button" class="buttonEnviar"  id="buttonMontarMatriz" onClick="resultadoMatrizMultMatriz()" >Enviar</button> </div>'
    }
}

function resultadoMatrizMultMatriz(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
    let numColunas1 = parseFloat(document.getElementById("colunas1").value);
    let numLinhas2 = parseFloat(document.getElementById("linhas2").value);
    let numColunas2 = parseFloat(document.getElementById("colunas2").value);

    document.getElementById("títuloMatrizMM").innerHTML += `<br><center><h2>Matriz Multiplicada</h2></center>`

    for(var i = 1; i <= numColunas1; i++){
        for(var j = 1; j <= numLinhas2; j++){
            
            let valor = 0;

            if(j == numColunas1){
                valor += parseFloat(document.getElementById(`array1[${i}][${j}]`).value) * parseFloat(document.getElementById(`array2[${j}][${i}]`).value);
                document.getElementById("MatrizMM").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/> <br>`
            }
            else{
                valor += parseFloat(document.getElementById(`array1[${i}][${j}]`).value) * parseFloat(document.getElementById(`array2[${j}][${i}]`).value);
                document.getElementById("MatrizMM").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/>`
            }
        } 
    }

    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

function Voltar(){
    document.getElementById("escolha").innerHTML = ``
}



