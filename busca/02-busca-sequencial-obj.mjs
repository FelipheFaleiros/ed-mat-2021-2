// /*
//     Quando um algoritmo de busca precisara atuar sobre um vetor
//     de objetos, a comparação não deve ser feita dentro da função 
//     que implementa o algoritmo. Em vez disso recebemos uma outra
//     função (externa) como parâmetro que resolverá a comparação.

//     Essa função externa será chamada passada o objeto atual do vetor 
//     e esperará um retorno true, caso a função externa determine que 
//     o objeto atual contém o valor de busca, ou false, caso contrário.  
// */
// function buscaSequencial(vetor, fnComp){
//     //percurso do vetor com for tradicional 
//     for(let i = 0; i < vetor.length; i++){
//         //A comparação será feita pela função externa fnComp()
//         //console.log("Primeiro elemento do vertor: ", vetor[i])
//         if(fnComp(vetor[i])) return i
//     }
//     return -1 //caso o valor de busca seja inexistente 
// }
// function comparaNome3(obj) {
//     // console.log("Objeto recebido pela função externa: ", obj)
//     return obj.first_name === "AABRAO"
// }
// function comparaNome(obj) {
//     return obj.first_name === "FELIPHE"

// }
// function comparaNome2(obj) {
//     return obj.first_name === "CLAUDEMIR"
//  }

// console.time("Busca AABRAO...")
// console.log("Posição de AABRAO: ", buscaSequencial(objNomes, comparaNome3))
// console.timeEnd("Busca AABRAO...")

// //Termina o programa 
// // process.exit(0)

// import { objNomes } from "../data/vetor-obj-nomes.mjs"

// console.time("Busca Feliphe...")
// console.log("Posição de FELIPHE: ", buscaSequencial(objNomes, comparaNome))
// console.timeEnd("Busca Feliphe...")

// console.time("Busca CLAUDEMIR...")
// console.log("Posição de CLAUDEMIR: ", buscaSequencial(objNomes, comparaNome2))
// console.timeEnd("Busca CLAUDEMIR...")

// console.time("Busca MOACIR...")
// console.log("Posição de MOACIR: ", buscaSequencial(objNomes, function(obj) {
//     return obj.first_name === "MOACIR"}))
// console.timeEnd("Busca MOACIR...")

// console.time("Busca GERCINA...")
// console.log("Posição de GERCINA: ", buscaSequencial(objNomes, obj => obj.first_name === "GERCINA"))
// console.timeEnd("Busca GERCINA...")

// console.time("Buscar frequency_total 14909...")
// console.log("Posição  frequency_total 14909: ", buscaSequencial(objNomes, obj =>  frequency_total === 14909))
// console.timeEnd("Buscar frequency_total 14909...")

function buscaSequencial(vetor, fnComp) {
    // Percurso com for tradicional
    for(let i = 0; i < vetor.length; i++) {
       //if(vetor[i] === valorBusca) return i
       // Encontrado o valor de busca, retorna-se a posição onde foi encontrado 
       // fnComp representa a chamada à função externa
       if(fnComp(vetor[i])) return i
    }
    // Retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1
}

// Recebe apenas um objeto de nome e retorna true caso a propriedade
// first_name seja idêntica ao valor de busca
/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}*/
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from "../data/vetor-obj-nomes.mjs"

console.time('Buscando ZILMAR')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZILMAR'))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'KATIUSCIA'))
console.timeEnd('Buscando KATIUSCIA')

console.time('Buscando nome ABRAAO')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ABRAAO'))
console.timeEnd('Buscando nome ABRAAO')

   //console.time("Busaca KATIUSCIA")
   //console.log(buscaSequencial(objNomes, "KATIUSCA", (obj , busca) => obj.first_name === busca))     **dessa forma é necessário a insersão de mais uma variavel no começo do código          function buscaSequencial(vetor, **valorBusca**, fnComp)      
   //console.timeEnd("Busca KATIUSCA")

   //console.time("Busaca nome ABRAAO")
   //console.log(buscaSequencial(objNomes, "ABRAAO", (obj , busca) => obj.first_name === busca))
   //console.timeEnd("Busca nome ABRAAO")

console.time('Buscando nome ABRAAO')
let posEncontrado = buscaSequencial(objNomes, obj => obj.first_name === 'ABRAAO')
console.timeEnd('Buscando nome ABRAAO')
console.log(objNomes[posEncontrado])

console.time("Busca group_name MARIA")
console.log(buscaSequencial(objNomes, obj => obj.group_name == "MARIA"));
console.timeEnd("Busca group_name MARIA")

console.time('Buscando nome ODHAIR')
console.log(buscaSequencial(objNomes, obj => obj.first_name == 'ODHAIR'))
console.timeEnd('Buscando nome ODHAIR')

console.time('Buscando frequency_total 14909...')
console.log('Posição frequency_total 14909:', buscaSequencial(objNomes, obj => obj.frequency_total === 14909))
console.timeEnd('Buscando frequency_total 14909...')