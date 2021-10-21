import Stack from "../lib/Stack.mjs"

// const expressao = "3 / {2 + 4 * [-1 (4 * 7) / 2] + (2 * 7)}" //correto
// const expressao = "3 / {2 + 4 * [(-1 (4 * 7) / 2] + [(2 * 7)}" //mais abertura de simbolo
// const expressao = "3 / {2 + 4 * [-1 (4 * 7) / 2) + (2 * 7]}" // não fecha na ordem 
const expressao = "3 / {2 + 4} * [-1 (4 * 7) / 2]) + (2 * 7)}" //mais fecha

const analisador = new Stack()  //Criar uma pilha

/*
    Tipos de símbolos:
    P = parêntese
    C = colchete
    X = chave
*/

function veriFechamanto(tipoFecha, posFecha, infoAbre){
    // O valor undefined para infoAbre significa que a pilha tornou-se
    //vazia antes do fim da análise da expressão.
    // Isso ocorre quando há mais simbolos de fechamento do que de abertura.
    if (infoAbre === undefined){
        console.log (`ERRO: há mais simbolos de fechamento que de abertura; tipo 
        ${tipoFecha}, posição ${posFecha}`)
    }
    else if(tipoFecha === infoAbre.tipo){
        console.log(`-> Símbolo tipo ${infoAbre.tipo} aberto na posição ${infoAbre.pos}
         e fechando na posição ${posFecha}`)     
    }
    else {
        console.log(`ERRO: símbolo de fechamento do tipo ${tipoFecha} encontrado na
         posição ${posFecha}; esperado tipo ${infoAbre.tipo}`)
    }

}

// Percorrer a expressão procurando por símbolos
// 1. Quando encontra símbolos de abertura, empilha, no analisador
//informando sobre eles
// 2. Quando encontra símbolos de fechamento, desempilha e chama 
//a função verifFechamento() para verificar as informações
for (let pos = 0; pos < expressao.length; pos++){
    switch(expressao.charAt(pos)){
        case '{':
            analisador.push({tipo: 'X', pos:pos})
            // console.log("Abre X", analisador.print())
            break
        case '[':
            analisador.push({tipo: 'C', pos:pos})
            // console.log("Abre C", analisador.print())
            break
        case '(': 
            analisador.push({tipo: 'P', pos:pos})
            // console.log("Abre P", analisador.print())
            break
        case '}':
            veriFechamanto('X', pos, analisador.pop())
            // console.log("Fecha X", analisador.print())
            break
        case ']':
            veriFechamanto('C', pos, analisador.pop())
            // console.log("Fecha C", analisador.print())
            break
        case ')':
            veriFechamanto('P', pos, analisador.pop())
            // console.log("Fecha P", analisador.print())
    }
}

// console.log(analisador.print())

// Verificar se houve sobra na pilha 
// Acontece quando há mais símbolos de abertura do que de fechamento 
while(! analisador.isEmpty){
    let sobra = analisador.pop()
    console.log(`ERRO: símbolo de abertura do tipo ${sobra.tipo} na posição ${sobra.pos}
    não possui símbolo de fechamento correspondente`)
}