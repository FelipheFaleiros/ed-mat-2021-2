/* 
   ESTRUTURAS DE DADOS PILHA    

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações      
    de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.    
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
    último a entrar, primeiro a sair).    
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma      
    sequência de dados.
*/

export default class Stack{ //sera utilizado em outro arq

    #date //Vetor privado

    constructor(){
        this.#date = []
    }

    //Método para a inserção no vetor
    push(val){
        this.#date.push(val)
    }

    //Método para remoção do vetor
    pop(){
        return this.#date.pop()  //ira retirar da primeira ultima
    }

    //Método para consultar o topo (última posição) da pilha
    //sem remover o elemento
    peek(){ //dar uma espiada
        return this.#date[this.#date.length -1]
    }

    // Getter para informar se a pilha está ou não vazia (propriedade somente leitura)
    get isEmpty (){
        return this.#date.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print(){
        return JSON.stringify(this.#date)
    }

}

/*************Fora da classe *********************/
