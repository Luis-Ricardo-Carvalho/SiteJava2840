//FilaCircular.js
class FilaCircular {
    #inicio;
    #fim;
    #qtd;
    #elementos;

    constructor(tamanho = 10) {
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    }

    isFull() {
        return this.#qtd === this.#elementos.length;
    }

    isEmpty() {
        return this.#qtd === 0;
    }

    enqueue(dado) {
        if (!this.isFull()) {
            this.#fim = (this.#fim + 1) % this.#elementos.length;
            this.#elementos[this.#fim] = dado;
            this.#qtd++;
            return true;
        } else {
            return false; // fila cheia
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const dado = this.#elementos[this.#inicio];
            this.#inicio = (this.#inicio + 1) % this.#elementos.length;
            this.#qtd--;
            return dado;
        } else {
            return null; // fila vazia
        }
    }

    toString() {
        let filaString = "";
        for (let i = 0; i < this.#qtd; i++) {
            let index = (this.#inicio + i) % this.#elementos.length;
            filaString += this.#elementos[index] + " | ";
        }
        console.log(filaString);
        return filaString;
    }
}//Fim