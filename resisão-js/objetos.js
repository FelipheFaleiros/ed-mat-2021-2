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

// Acessar as propriedades de um objeto
console.log(pessoa.nome)
console.log(pessoa.gostos)

/* QUando o nome da propriedade contém espaço ou acentos,
devemos acessá-la usando a SINTAXE DOS COLCHETES'1*/
console.log(pessoa['cidade de origem'])
console.log(pessoa['série'])

// A sintaxe dos colchetes SEMPRE funciona
console.log(pessoa['dataNasc'])
console.log(pessoa['ocupacao'])

console.log('------------')
/* Uma consequência da sintaxe dos colchetes é a possibilidade
de ter nomes de propriedades dentro de variáveis */
let props = ['nome', 'sexo', 'dataNasc', 'ocupacao']

for(let p of props){
    console.log(pessoa[p])
} 

//Acrescentando novas propriedades a um objeto existente
pessoa.email = 'juracirj@gmail.com'
pessoa['telefone contato'] = '(16) 99999-8888'

console.log(pessoa)

//Iniciar um objeto vazio 
let carro = {}
carro.modelo = 'Volkswagen'
carro.marca = 'Fusca'
carro.cor = 'Preto'
carro.ano = 1969    
carro['nome do proprietário'] = 'Juscelina Jordão'   

console.log(carro)

console.log('------**------')
console.log('Exibindo os nomes das propriedades do objeto pessoa')
console.log('------for...in-------')
//for..in : retorna as propriedades de um objeto    
for(let prop in pessoa){
    console.log(prop)
}

console.log('------**------')
console.log('Exibindo os nomes das propriedades do objeto carro')
//for..in : retorna as propriedades de um objeto    
for(let atri in carro){
    console.log(atri)
}

/* for..in pode ser utilizado juntamente com a sintaxe dos colchetes
pra recuperar o valor de todos as propriedades de um objeto  */
for(let p in pessoa) {
    console.log(`${p} -> ${pessoa[p]}`)
}