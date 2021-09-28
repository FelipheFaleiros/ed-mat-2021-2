/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

/*
    BUSCA BINARIA 
    z = nome da função
    y = vetor 
    x = valor de busca
    w = por onde é iniciado a busca 
    v = onde termina a busca
    u = meio da busca
    */

const z = (y, fnComp) => {
    let w = 0
    let v = y.length - 1
    
    while(v >= w) {
        let u = Math.floor((w + v) / 2)

        switch(fnComp(y[u])){
            case 0:     
                return u
            
            case 1:    
                w = u + 1
                break
            
            default:   
                v = u -1
        }
    }
    return -1
}
// function comparar(valorMeio, valorBusca = 'FAUSTO') {
//     if(valorBusca === valorMeio.first_name) return 0
//     else if(valorBusca > valorMeio.first_name) return 1
//     else return -1
// }

import { objNomes } from "./data/vetor-obj-nomes.mjs"

// console.log("Posição de first_name === FELIPHE", z(objNomes, comparar))

console.log("Posição de first_name === FELIPHE", z(objNomes,
    (valorMeio, valorBusca = "FELIPHE") => {
    if(valorBusca === valorMeio.first_name) return 0
    else if (valorBusca > valorMeio.first_name) return 1
    else return -1
    }
))