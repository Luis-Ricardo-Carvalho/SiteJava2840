const minhaFila = new Fila(5);
const minhaFila2 = new FilaCircular(5);

function addElemento(){
    const novoElemento = 
       document.getElementById("txtnovoNome");
    if(!minhaFila2.isFull()){
       minhaFila2.enqueue(novoElemento.value);
       mostrarFila();
       novoElemento.value = ""; // limpa
       novoElemento.focus(); // cursor no input
    } 
    else
        alert("Fila cheia!");     
}// fim addElemento
//-----------------------------------
function mostrarFila(){
   const listaFila = document.getElementById("listFila");
   listaFila.textContent = minhaFila2.toString();
}

//-----------------------------
function atenderFila(){
   if(!minhaFila2.isEmpty()){
      const atendido = minhaFila2.dequeue();
      alert("Pessoa atendida:"+atendido);
      mostrarFila();
      //salvar no banco texto do navegador
   }
   else
      alert("Fila vazia!");
}
//---------------------------------------