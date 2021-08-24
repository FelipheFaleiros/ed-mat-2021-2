/*
    Quando um algoritmo de busca precisara atuar sobre um vetor
    de objetos, a comparação não deve ser feita dentro da função 
    que implementa o algoritmo. Em vez disso recebemos uma outra
    função (externa) como parâmetro que resolverá a comparação.

    Essa função externa será chamada passada o objeto atual do vetor 
    e esperará um retorno true, caso a função externa determine que 
    o objeto atual contém o valor de busca, ou false, caso contrário.  
*/
function buscaSequencial(vetor, fnComp){
    //percurso do vetor com for tradicional 
    for(let i = 0; i < vetor.length; i++){
        //A comparação será feita pela função externa fnComp()
        //console.log("Primeiro elemento do vertor: ", vetor[i])
        if(fnComp(vetor[i])) return i
    }
    return -1 //caso o valor de busca seja inexistente 
}
function comparaNome3(obj) {
    // console.log("Objeto recebido pela função externa: ", obj)
    return obj.first_name === "AABRAO"
}
function comparaNome(obj) {
    return obj.first_name === "FELIPHE"

}
function comparaNome2(obj) {
    return obj.first_name === "CLAUDEMIR"
 }

console.time("Busca AABRAO...")
console.log("Posição de AABRAO: ", buscaSequencial(objNomes, comparaNome3))
console.timeEnd("Busca AABRAO...")

//Termina o programa 
process.exit(0)

import { objNomes } from "../data/vetor-obj-nomes.mjs"

console.time("Busca Feliphe...")
console.log("Posição de FELIPHE: ", buscaSequencial(objNomes, comparaNome))
console.timeEnd("Busca Feliphe...")

console.time("Busca CLAUDEMIR...")
console.log("Posição de CLAUDEMIR: ", buscaSequencial(objNomes, comparaNome2))
console.timeEnd("Busca CLAUDEMIR...")

console.time("Busca MOACIR...")
console.log("Posição de MOACIR: ", buscaSequencial(objNomes, function(obj) {
    return obj.first_name === "MOACIR"}))
console.timeEnd("Busca MOACIR...")

console.time("Busca GERCINA...")
console.log("Posição de GERCINA: ", buscaSequencial(objNomes, obj => obj.first_name === "GERCINA"))
console.timeEnd("Busca GERCINA...")