let pass, comps, trocas

function bubbleSort(vetor) {
    pass = 0, comps = 0, trocas = 0    
    let trocou    
    do {
        pass++        
        trocou = false        
        // Percurso for tradicional até a PENÚLTIMA posição do vetor        
        for(let i = 0; i < vetor.length - 1; i++) {
            comps++            
            if(vetor[i] > vetor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação                
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true                
                trocas++            }
        }
    } while(trocou)
}
// Melhor casolet nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]
bubbleSort(nums)
console.log(nums)
console.log({pass, comps, trocas})
/***************************************************************/

import { nomes } from '../data/nomes-desord.mjs'
console.time('Tempo de ordenação')
bubbleSort(nomes)
console.timeEnd('Tempo de ordenação')
console.log(nomes)
console.log({pass, comps, trocas})