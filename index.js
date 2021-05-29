//MATRIZ TRANSPOSTA
function InícioMatrizTransposta(){      //NÚMERO DE LINHAS E COLUNAS DA MATRIZ 

    Bloqueio();

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

    <div class="container">
        <div id="erro"></div>
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
`}

function montarMatrizTransposta(){   //MONTA O INPUT  

    document.getElementById("buttonEnviarInput").disabled = true

    if(document.getElementById("linhas").value == '' || document.getElementById("colunas").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{
        let numLinhas = parseFloat(document.getElementById("linhas").value);
        let numColunas = parseFloat(document.getElementById("colunas").value);

        if(numLinhas <= 0 || numColunas <= 0){ 
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Não é possível montar matriz com valores de Zero ou Negativos`
            document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
        }
        else{
            document.getElementById("buttonEnviarInput").disabled = true

            document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

            for(var i = 1; i <= numLinhas; i++){
                for(var j = 1; j <= numColunas; j++){
                    document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
                }
                document.getElementById("input-array").innerHTML += `<br>`
            }
            document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" id="buttonMontarMatriz" class="buttonEnviar" onClick="resultadoMatrizTransposta()" >Enviar</button> </div>'
        }   
    } 
}

function resultadoMatrizTransposta(){ //MONTA A MATRIZ TRANSPOSTA  

    document.getElementById("buttonMontarMatriz").disabled = true
    let numLinhas = parseFloat(document.getElementById("colunas").value); //INVERTENDO LINHAS E COLUNAS
    let numColunas = parseFloat(document.getElementById("linhas").value);

    document.getElementById("títuloMatrizTransposta").innerHTML += `<br><center><h2>Matriz Transposta</h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){

            let valor = `${document.getElementById(`array[${j}][${i}]`).value}`;
            document.getElementById("MatrizT").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/>`
        } 
        document.getElementById("MatrizT").innerHTML += `<br>`
    } 
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

//MATRIZ OPOSTA
function InícioMatrizOposta(){      //NÚMERO DE LINHAS E COLUNAS DA MATRIZ 

    Bloqueio();

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

    <div class="container">
        <div id="erro"></div>
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
`}

function montarMatrizOposta(){   //MONTA O INPUT  

    document.getElementById("buttonEnviarInput").disabled = true;

    if(document.getElementById("linhas").value == '' || document.getElementById("colunas").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{
        let numLinhas = parseFloat(document.getElementById("linhas").value);
        let numColunas = parseFloat(document.getElementById("colunas").value);

        if(numLinhas <= 0 || numColunas <= 0){ 
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Não é possível montar matriz com valores de Zero ou Negativos`
            document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
        }
        else{
            document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

            for(var i = 1; i <= numLinhas; i++){
                for(var j = 1; j <= numColunas; j++){
                    document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
                }
                document.getElementById("input-array").innerHTML += `<br>`
            }
            document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" id="buttonMontarMatriz" class="buttonEnviar" onClick="resultadoMatrizOposta()" >Enviar</button> </div>'
        }
    }    
}

function resultadoMatrizOposta(){ //MONTA O MATRIZ OPOSTA

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);

    document.getElementById("títuloMatrizOposta").innerHTML += `<br><center><h2>Matriz Oposta</h2></center>`

    for(var i = 1; i <= numLinhas; i++){

        for(var j = 1; j <= numColunas; j++){
            
            let valor =  -1 * `${document.getElementById(`array[${i}][${j}]`).value}`;
            document.getElementById("MatrizO").innerHTML += `<input type="number" id="arrayT[${j}][${i}]" readOnly placeholder="${valor}"/>`
        } 
        document.getElementById("MatrizO").innerHTML += `<br>`
    } 
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

//MATRIZ MULTIPLICADA POR NÚMERO REAL
function InícioMatrizMult(){   
    
    Bloqueio();

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
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montarMatrizMulti()"> Enviar </button>
    </div>
    
    <div class="container">
        <div id="erro"></div>
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
`}

//MONTA A MATRIZ
function montarMatrizMulti(){   

    document.getElementById("buttonEnviarInput").disabled = true

    if(document.getElementById("linhas").value == '' || document.getElementById("colunas").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{

        let numLinhas = parseFloat(document.getElementById("linhas").value);
        let numColunas = parseFloat(document.getElementById("colunas").value);

        if(numLinhas <= 0 || numColunas <= 0){ 
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Não é possível montar matriz com valores de Zero ou Negativos`
            document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
        }
        else{
            document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

            for(var i = 1; i <= numLinhas; i++){
                for(var j = 1; j <= numColunas; j++){
                    document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
                }
                document.getElementById("input-array").innerHTML += `<br>`
            }
            document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" class="buttonEnviar" id="buttonMontarMatriz" onClick="resultadoMatrizMult()" >Enviar</button> </div>'
        }
    }    
}

//MOSTRA RESULTADO
function resultadoMatrizMult(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);
    let num = parseFloat(document.getElementById("num").value);

    document.getElementById("títuloMatrizMulti").innerHTML += `<br><center><h2>Matriz Multiplicada</h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
           
        let valor =  `${num * document.getElementById(`array[${i}][${j}]`).value}`;
        document.getElementById("MatrizM").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/>`
        } 
        document.getElementById("MatrizM").innerHTML += `<br>`
    } 
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

//Divisão de matriz
function InícioMatrizDiv(){   

    Bloqueio();

    document.getElementById("escolha").innerHTML += `<br>
    <center><h2>Insira a ordem da Matriz</h2></center>
    
    <div class="container">
        <div>
            Digite o número de linhas <input type="number"  id="linhas" /><br>
            Digite o número de colunas <input type="number"  id="colunas" /><br> <br>
            Digite o número pelo qual deseja dividir a Matriz <input type="number" id="num">
        </div>
    </div>

    <div class="container">
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="montarMatrizDiv()"> Enviar </button>
    </div>

    <div class="container">
        <div id="erro"></div>
    </div>

    <div id="título-input"></div> 

    <div class="container">
        <div id="input-array"></div>
    </div>

    <div id="títuloMatrizDiv"></div>

    <div class="container">
        <div id="MatrizD"></div>
    </div>
    
    <div id="buttonVoltar"></div>
`}

//MONTA A MATRIZ
function montarMatrizDiv(){   

    document.getElementById("buttonEnviarInput").disabled = true

    if(document.getElementById("linhas").value == '' || document.getElementById("colunas").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else if(document.getElementById("num").value == 0){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Não é possível fazer divisão por 0`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    } 
    else{

        let numLinhas = parseFloat(document.getElementById("linhas").value);
        let numColunas = parseFloat(document.getElementById("colunas").value);

        if(numLinhas <= 0 || numColunas <= 0){ 
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Não é possível montar matriz com valores de Zero ou Negativos`
            document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
        }
        else{
            document.getElementById("título-input").innerHTML = `<center><h2>Insira os valores da matriz </h2></center>`

            for(var i = 1; i <= numLinhas; i++){
                for(var j = 1; j <= numColunas; j++){
                    document.getElementById("input-array").innerHTML += `<input type="number" id="array[${i}][${j}]"/>`
                }
                document.getElementById("input-array").innerHTML += `<br>`
            }
            document.getElementById("input-array").innerHTML += '<div class="container"><button type="button" class="buttonEnviar" id="buttonMontarMatriz" onClick="resultadoMatrizDiv()" >Enviar</button> </div>   '
        }
    }   
}

//MOSTRA RESULTADO
function resultadoMatrizDiv(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas = parseFloat(document.getElementById("linhas").value);
    let numColunas = parseFloat(document.getElementById("colunas").value);
    let num = parseFloat(document.getElementById("num").value);

    document.getElementById("títuloMatrizDiv").innerHTML += `<br><center><h2>Matriz Dividida</h2></center>`

    for(var i = 1; i <= numLinhas; i++){
        for(var j = 1; j <= numColunas; j++){
        
            let valor;
            valor =  `${num / document.getElementById(`array[${i}][${j}]`).value}`;
            document.getElementById("MatrizD").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${valor}"/>`
        } 
        document.getElementById("MatrizD").innerHTML += `<br>`
    } 
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

//SOMA DE DUAS MATRIZES
function InícioMatrizSoma(){

    Bloqueio();

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
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="MontaMatrizesSoma()"> Enviar </button>
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

    <div id="títuloMatrizSomada"></div>

    <div class="container">
        <div id="MatrizSomada"></div>
    </div>
    <div id="buttonVoltar"></div>
`}

//MONTA AS MATRIZES DE SOMA
function MontaMatrizesSoma(){  
    
    document.getElementById("buttonEnviarInput").disabled = true

    if(document.getElementById("linhas1").value == '' || document.getElementById("colunas1").value  == ''|| document.getElementById("linhas2").value  == ''|| document.getElementById("colunas2").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{

        let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
        let numColunas1 = parseFloat(document.getElementById("colunas1").value);
        let numLinhas2 = parseFloat(document.getElementById("linhas2").value);
        let numColunas2 = parseFloat(document.getElementById("colunas2").value);

        if(numColunas1 !== numColunas2 || numLinhas1 !== numLinhas2 || numLinhas1 <= 0 ||  numColunas1 <= 0 || numLinhas2 <= 0 || numColunas2 <= 0){
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/> <p>Na adição entre duas matrizes as duas devem ser de mesma ordem. Por exemplo, matriz de ordem 2×2, 3×3, 4×4, etc. <br>Ou seja, <b>ambas devem ter os mesmos números de linhas e colunas<br> (Matrizes não podem ter linhas ou colunas com valor menor ou igual a zero!!!).`
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
            document.getElementById("input-array2").innerHTML += '<div class="container"><button type="button" class="buttonEnviar"  id="buttonMontarMatriz" onClick="resultadoMatrizSomada()" >Enviar</button> </div>'
        }
    }    
}

//REALIZA A SOMA DAS MATRIZES E MOSTRA O RESULTADO
function resultadoMatrizSomada(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
    let numColunas1 = parseFloat(document.getElementById("colunas1").value);
    
    document.getElementById("títuloMatrizSomada").innerHTML += `<br><center><h2>Matriz Somada</h2></center>`
   
    for(var i = 1; i <= numLinhas1; i++){
        for(var j = 1; j <= numColunas1; j++){
           
            let resultado = 0;
            resultado += parseFloat(document.getElementById(`array1[${i}][${j}]`).value) + parseFloat(document.getElementById(`array2[${i}][${j}]`).value);                
            document.getElementById("MatrizSomada").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${resultado}"/> `
        }
        document.getElementById("MatrizSomada").innerHTML += `<br>`
    }
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

//SUBTRAÇÃO DE DUAS MATRIZES
function InícioMatrizSubtracao(){

    Bloqueio();

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
        <button class="buttonEnviar" id="buttonEnviarInput" onClick="MontaMatrizesSubtracao()"> Enviar </button>
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

    <div id="títuloMatrizSubtraida"></div>

    <div class="container">
        <div id="MatrizSubstraida"></div>
    </div>
    <div id="buttonVoltar"></div>
`}

//MONTA AS MATRIZES DE SUBTRAÇÃO
function MontaMatrizesSubtracao(){  
    
    document.getElementById("buttonEnviarInput").disabled = true
    
    if(document.getElementById("linhas1").value == '' || document.getElementById("colunas1").value  == ''|| document.getElementById("linhas2").value  == ''|| document.getElementById("colunas2").value  == ''){
        document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/><p>Erro: Campos não preenchidos`
        document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
    }
    else{

        let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
        let numColunas1 = parseFloat(document.getElementById("colunas1").value);
        let numLinhas2 = parseFloat(document.getElementById("linhas2").value);
        let numColunas2 = parseFloat(document.getElementById("colunas2").value);

        if(numColunas1 !== numColunas2 || numLinhas1 !== numLinhas2 || numLinhas1 <= 0 ||  numColunas1 <= 0 || numLinhas2 <= 0 || numColunas2 <= 0){
            document.getElementById("erro").innerHTML += `<img src="./images/Questions-bro.svg"/> <p>Na subtração entre duas matrizes as duas devem ser de mesma ordem. Por exemplo, matriz de ordem 2×2, 3×3, 4×4, etc. <br>Ou seja, <b>ambas devem ter os mesmos números de linhas e colunas <br> (Matrizes não podem ter linhas ou colunas com valor menor ou igual a zero!!!).`
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
            document.getElementById("input-array2").innerHTML += '<div class="container"><button type="button" class="buttonEnviar"  id="buttonMontarMatriz" onClick="resultadoMatrizSubtraida()" >Enviar</button> </div>'
        }
    }    
}

//REALIZA A SUBTRAÇÃO DAS MATRIZES E MOSTRA O RESULTADO
function resultadoMatrizSubtraida(){ 

    document.getElementById("buttonMontarMatriz").disabled = true

    let numLinhas1 = parseFloat(document.getElementById("linhas1").value);
    let numColunas1 = parseFloat(document.getElementById("colunas1").value);
    
    document.getElementById("títuloMatrizSubtraida").innerHTML += `<br><center><h2>Matriz Subtraída</h2></center>`

    for(var i = 1; i <= numLinhas1; i++){
        for(var j = 1; j <= numColunas1; j++){
        
            let resultado = 0; 
            resultado += parseFloat(document.getElementById(`array1[${i}][${j}]`).value) - parseFloat(document.getElementById(`array2[${i}][${j}]`).value);                
            document.getElementById("MatrizSubstraida").innerHTML += `<input type="number" id="arrayT[${i}][${j}]" readOnly placeholder="${resultado}"/>`
        } 
        document.getElementById("MatrizSubstraida").innerHTML += `<br>`
    }
    document.getElementById("buttonVoltar").innerHTML += '<br><br><center><button type="button" class="buttonVoltar" onClick="Voltar()" >Voltar ao Menu</button> </center>'
}

function Bloqueio(){   //DESATIVANDO BOTÔES DAS OUTRAS OPÇÕES
    document.getElementById("OP1").disabled = true;
    document.getElementById("OP2").disabled = true;
    document.getElementById("OP3").disabled = true;
    document.getElementById("OP4").disabled = true; 
    document.getElementById("OP5").disabled = true; 
    document.getElementById("OP6").disabled = true; 
}

function Voltar(){
    document.getElementById("escolha").innerHTML = ``;
    document.getElementById("OP1").disabled = false;
    document.getElementById("OP2").disabled = false;
    document.getElementById("OP3").disabled = false;
    document.getElementById("OP4").disabled = false; 
    document.getElementById("OP5").disabled = false; 
    document.getElementById("OP6").disabled = false; 
}



