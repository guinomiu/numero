let vetor = [];
let vetorTamanho = 0; 


function inserirNumero() {
    let numero = parseInt(document.getElementById("numberInput").value);
    
    if (!isNaN(numero)) {
        vetor[vetorTamanho] = numero; 
        vetorTamanho++; 
        
        mostrarVetor('listaOriginal', vetor); 
        
        document.getElementById("numberInput").value = "";
        document.getElementById("numberInput").focus();
    } else {
        alert("Por favor, insira um número inteiro válido.");
    }
}


function ordenarVetor() {
    let n = vetorTamanho;
    let ordenado = [];
    
    
    for (let i = 0; i < n; i++) {
        ordenado[i] = vetor[i];
    }
    
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (ordenado[j] > ordenado[j + 1]) {
                
                let temp = ordenado[j];
                ordenado[j] = ordenado[j + 1];
                ordenado[j + 1] = temp;
            }
        }
    }
    
    mostrarVetor('listaOrdenada', ordenado); 
}


function mostrarVetor(divId, vetorParaMostrar) {
    let resultado = ""; 
    
  
    for (let i = 0; i < vetorTamanho; i++) {
        resultado += vetorParaMostrar[i];
        if (i < vetorTamanho - 1) {
            resultado += ", "; 
        }
    }
    
 
    document.getElementById(divId).innerText = resultado;
}
