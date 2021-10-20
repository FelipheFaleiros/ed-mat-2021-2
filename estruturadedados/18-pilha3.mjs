/* 
    PALÍNDROMO: texto que pode ser lindo de trás para frente e 
    continua idêntico 
*/

import Stack from "../lib/Stack.mjs"

let frase = "Socorram-me, bubi no ônibus em Marrocos"

// Problema: inverter a frase para verificar ser é um palíndromo

let pilha = new Stack //pilha vazio 

//Percorre a frase e coloca cada uma das letras dela
//dentro da pilha
for (let i = 0; i < frase.length; i++){
    pilha.push(frase.charAt(i))
    //push inseri informação no vetor. charAt pegara o caracter que estiver sendo 
    //referenciado no for(i)
}


/***********************************************************/

console.log(pilha.print()) //temos todo o let frase, com seus caracteres separado 

let reverso = ""

while(! pilha.isEmpty){
    reverso += pilha.pop()
    //pop retira o ultimo caracter do vetor e add da pilha
}

console.log(reverso)

/*
    PILHA   
    É uma estrutura em que, usando uma lista linear (vetor) como base, permitindo 
    inserções apenas no final e remoções também a partir do final.
    Com isso, temos o comportamento conhecido com LIFO = Last In, First Out
    (Último a entrar, primeiro a sair).
    Pilhas são usadas em tarefas computacionais que requerem a inversão da
    ordem de entrada dos dados
*/