/**     ALGORÍTIMO DE BUSCA SEQUENCIAL 
    Percorre o vetor, verificando se cada um dos elementos corresponde 
    ao valor busca. Ao encontrar um correspondência, retorna 
    a posição onde o valor de busca está no vetor.
 
    Caso o valor de busca não exista no vetor, retorna o valor convencional -1.
    */

function buscaSequencial(vetor, valorBusca){
    //Percurso do vetor com for tradicional 
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1   //valorBusca não existe em vetor
}

const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão']

console.log('Posição de uva:', buscaSequencial(frutas,'uva'))
console.log('Posição de laranja:', buscaSequencial(frutas,'laranja'))
console.log('Posição de mamão:', buscaSequencial(frutas,'mamão'))
console.log('Posição de abacate:', buscaSequencial(frutas,'abacate'))

//Número de comparações em um vetor de n elementos:
//Quando valorBusca é encontrado: pos + 1
//Quando valorBusca não é encontrado: n

import { nomes } from '../data/vetor-nomes.mjs'

console.time("Busca Feliphe...")        //Dispara a contagem
console.log('Posição de Feliphe:', buscaSequencial(nomes, 'FELIPHE'))
console.timeEnd("Busca Feliphe...")     //Para a contagem

console.time("Busca JURANDIR...")        //Dispara a contagem
console.log('Posição de JURANDIR:', buscaSequencial(nomes, "JURANDIR"))
console.timeEnd("Busca JURANDIR...")     //Para a contagem

console.time("Busca VERONICA...")        //Dispara a contagem
console.log('Posição de VERONICA:', buscaSequencial(nomes, "VERONICA"))
console.timeEnd("Busca VERONICA...")     //Para a contagem

console.time("Busca BERNARDO...")        //Dispara a contagem
console.log('Posição de BERNARDO:', buscaSequencial(nomes, "BERNARDO"))
console.timeEnd("Busca BERNARDO...")     //Para a contagem

console.time("Busca INEXISTENTE...")        //Dispara a contagem
console.log('Posição de INEXISTENTE:', buscaSequencial(nomes, "INEXISTENTE"))
console.timeEnd("Busca INEXISTENTE...")     //Para a contagem