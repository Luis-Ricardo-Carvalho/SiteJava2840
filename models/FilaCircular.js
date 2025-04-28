//FilaCircular.js
class FilaCircular{ 
    #inicio; //# privados
    #fim;
    #qtd;
    #elementos; // vetor
    constructor(tamanho=10){ 
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    }
    
    isFull(){
     return this.#qtd === 
            this.#elementos.length;            
    }

    isEmpty(){
        return this.#qtd === 0; 
    }

    enqueue(dado){
        if(!this.isFull()){
            this.#elementos[this.#fim] = dado;
            this.#fim = (this.#fim +1) % this.#elementos.length;
            this.#qtd++;
            return true;
        }// fim if
        else
            return false; // se estiver cheio
    }

    dequeue(){
        if(!this.isEmpty()){
            const dado = 
                 this.#elementos[this.#inicio];
            this.#inicio = (this.#inicio + 1) % this.#elementos.length;
            this.#qtd--;
            return dado;
        }// fim if
        else
            return null; // se estiver vazio 
    }

    toString(){
        let filaString = "";
        let i = this.#inicio;
        let count = 0;
        while (count < this.#qtd) {
            filaString += this.#elementos[i] + " | ";
            i = (i + 1) % this.#elementos.length;
            count++;
        }
        console.log(filaString);
        return filaString;
    }

    

}// fim classe
