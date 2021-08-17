/*
    Objetos são estruturas de linguagem JS que permite armazenar múltiplos 
    valores em uma variável, tal como os vetores. No entanto ao contrário
    destes, as posições dos valores não NOMEADAS, são NUMERADAS.
*/

// Criação de um objeto vazio
let objeto1 = new Object()  //Forma tradicional 
let objeto2 = {}            //Forma moderna

//Criação objetos já com propriedades
/* Uma propriedade é um par formado pelo nome da propriedade 
e o valor da propriedade, separado por dois pontos */
//Propriedade são também chamadas de atributos 
let pessoa = {
    nome: 'Juracir Junqueira',
    sexo: 'M',
    dataNasc: '2009-09-18',
    ocupacao: 'estudante',
    /* Quando nomes de propriedades contêm espaços ou 
    caracteres acentuadas, eles devem vir ENTRE ASPAS */
    'cidade de origem' : 'Franca/SP',
    'série' : '3º C',
    gostos: ['jogar', 'comer doces', 'dormir'], //Propriedade de vetor
}


//Acrescentando novas propriedades a um objeto existente
pessoa.email = 'juracirj@gmail.com'
pessoa['telefone contato'] = '(16) 99999-8888'



console.log('------**------')


/* for..in pode ser utilizado juntamente com a sintaxe dos colchetes
pra recuperar o valor de todos as propriedades de um objeto  */
for(let k in pessoa) {
    console.log(`${k} -> ${pessoa[k]}`)
}