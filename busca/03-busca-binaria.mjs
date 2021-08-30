/*************************** 
 * BUSCA BINÁRIA *  
 * Requer um conjunto de dados ORDENADO. 
 * Atua dividindo o vetor sucessivamente em metades aproximadas, 
 * até que o valor de busca seja localizado, ou que o ponteiro
 * de fim acabe antes do ponteiro de início. Essa última situação 
 * indica que o valor de busca não existe no conjunto.
 */

let comps //contar as comparações

function buscaBinaria(vetor, valorBusca){
    comps = 0
    let ini = 0 
    let fim = vetor.length - 1

    while(fim >= ini){ 
        comps ++
        //Math.floor() retira as casas decimais de um número 
        let meio = Math.floor((ini + fim) / 2) //enquanto o fim for maior ou igual ao inicio

        //Se o valor de busca for igual ao valor do vetor
        //na posição do meio, encontramos o que procuramos
        //e retornamos a posição onde entramos
        if (valorBusca === vetor[meio]){
            comps ++
            return meio
        } 
        //Senão, se o valor de busca for maior que o valor 
        //do meio do vetor, descartamos a metade esquerda
        //do vetor trazemos o ponteiro ini para meio +1
        else if(valorBusca > vetor[meio]) {
            comps += 2
            ini = meio + 1
        }

        //Por fim, caso o valor de busca seja menor que o 
        //valor do meio do vetor, descartamos a metade direta
        //do vetor trazemos o ponteiro fim para meio -1

        else {
            comps += 2    
            fim = meio - 1
        }
    }
    // Se chegamos até aqui significa que o fim < ini e, portanto,
    //o valor de busca não existe no vetor. Para indicar isso
    //retornamos o valor convencional -1.
    return -1
}

let nums = [0,11,22,33,44,55,66,77,88,99]

console.log("Posição 33: ", buscaBinaria(nums, 33), "comparações: ", comps)
console.log("Posição 77: ", buscaBinaria(nums, 77), "comparações: ", comps)
console.log("Posição 81: ", buscaBinaria(nums, 81), "comparações: ", comps)

/*********************************************** */
console.log("___________------__________")

import{nomes} from "../data/vetor-nomes.mjs"

console.log(`Posição de Feliphe: ${buscaBinaria(nomes, "FELIPHE")}, comparações: ${comps}`)
console.log(`Posição de ADAMASTOR: ${buscaBinaria(nomes, "ADAMASTOR")}, comparações: ${comps}`)
console.log(`Posição de ZULEIDE: ${buscaBinaria(nomes, "ZULEIDE")}, comparações: ${comps}`)
console.log(`Posição de INSTAGRAMILDA: ${buscaBinaria(nomes, "INSTAGRAMILDA")}, comparações: ${comps}`)
console.log(`Posição de JERDERSON: ${buscaBinaria(nomes, "JERDERSON")}, comparações: ${comps}`)//Nome exatamente no meio do vetor