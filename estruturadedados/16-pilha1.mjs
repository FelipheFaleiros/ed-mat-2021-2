/* 
    PALÍNDROMO: texto que pode ser lindo de trás para frente e 
    continua idêntico 
*/

let frase = "Socorram-me, bubi no ônibus em Marrocos"

// Problema: inverter a frase para verificar ser é um palíndromo

let vetor = [] //vetor vazio 

//Percorre a frase e coloca cada uma das letras dela
//dentro do vetor 
for (let i = 0; i < frase.length; i++){
    vetor.push(frase.charAt(i))
    //push inseri informação no vetor. charAt pegara o caracter que estiver sendo referenciado no for(i)
}

// DESCARACTERIZANDO A PILHA (inserindo e removendo de posições)

// Remove a 24º posição
vetor.splice(23,1)

// Insere na primeira posição
vetor.unshift('X')

// Insere na 12º posição 
vetor.splice(11, 0, 'W') //posição, remoção, adicionar

/***********************************************************/

console.log(vetor) //temos todo o let frase, com seus caracteres separado 

let reverso = ""

while(vetor.length > 0){
    reverso += vetor.pop()
    //pop retira o ultimo caracter do vetor e add no reverso
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