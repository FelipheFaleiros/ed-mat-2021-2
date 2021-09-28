/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
/*
    SELECTION SORT
    z = nome da função
    y = vetor
    x = a posição selecionada 
    w = a menor posição 
    i = usado para auxiliar 

    */

const z = (y, fnComp) => {
    for(let x = 0; x < y.length - 1; x++) {
        let w = x + 1
        for(let i = w + 1; i < y.length; i++) {
            if(fnComp(y[w], y[i])) w = i
        }
        if(fnComp(y[x], y[w])) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs"

selectionSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})