
let pass = 0, comps = 0, trocas = 0

//assinatura da função  
function quickSort (vetor, fnComp, posIni = 0, posFim = vetor.length -1){

    // Só trabalhamos se a relação do vetor tiver, pelo o menos, 2 elementos
    if (posFim <= posIni) return // Condição de saída 

    pass++

    const pivot = posFim
    let div = posIni - 1 

    // For indo da posição inicial até fim -1
    for(let i=posIni; i<posFim; i++){
        comps++
        //comparações entre dois elementos do vetor
        //if(vetor[pivot] > vetor[i]){
        if(fnComp(vetor[pivot], vetor[i])){
            div++
            if(div !== i){
                [vetor[i], vetor[div] ] = [vetor[div], vetor[i] ] 
                trocas++
            }
        }
    }
    div++
    
    // Colocamos o pivô em seu lugar definitivo
    comps++
    // if(vetor[div] > vetor[pivot] && div !== pivot) {
        if(div !== pivot && fnComp(vetor[div], vetor[pivot])){
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ]
        trocas++
    }

    // Chama o QuickSort para o subvetor à esquerda do pivô
    quickSort(vetor, fnComp, posIni, div -1)

    //Chama o QuickSort para o subvetor à direita do pivô
    quickSort(vetor, fnComp, div + 1, posFim)

}

import { objMotoristas } from "../data/motoristas-obj-desord.mjs"

console.time("Tempo de ordenação")

//Ordenado por  nome_motorista
//bubbleSort(objMotoristas,(elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

//Ordenado por  nome_motorista em ordem DECRESCENTE
//bubbleSort(objMotoristas,(elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

//Ordenado por  nome_motorista em ordem DECRESCENTE ignorando acentos
//bubbleSort(objMotoristas,(elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, "pt-br") <= 0) //LEEEENTO

//Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
quickSort(objMotoristas,(elem1, elem2) => {
    if (elem1.razao_social === elem2.razao_social){
        //Desempate é feito pelo nome do motorista 
        return elem1.nome_motorista > elem2.nome_motorista
    }
    //Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})

let memoriaMB = process.memoryUsage().heapUsed /1024/1024

console.timeEnd("Tempo de ordenação")

console.log(objMotoristas)
console.log({pass,comps,trocas,memoriaMB})