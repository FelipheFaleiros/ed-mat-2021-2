//Números
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)
console.log(a === c)
console.log(a !== c)
console.log('---------**---------')

//String
let nome1 =  'CATIFUNDA', nome2 = 'FELISBINO',nome3 = 'ÁGATA'
console.log (nome1 > nome2)
console.log (nome1 < nome2)
console.log (nome1 === nome2)
console.log (nome1 !== nome2)
console.log (nome1 < nome3)
console.log (nome1 > nome3)
console.log (nome1 === nome3)

console.log('---------Booleanos---------')
//Booleanos
let x = true, y = false, z = true
console.log(x > y)
console.log(x < y)
console.log(x === y)
console.log(x !== y)
console.log(x === z)
console.log(x !== z)

console.log('---------**---------')
//Diferença entre usar == e ===
// === verifica de conteúdo e tipo são iguais 
let i = 56, j = "56"
console.log(i == j)  //converte tipos automaticamente 
console.log(i === j)

console.log('---------Vetores---------')
//Vetores
let v1 = [10,20,30,40,50]
let v3 = [10,20,30,40,50]
let v2 = [-3,-2,-1,0]
console.log(v1 > v2)
console.log(v1 < v2)
console.log(v1 === v2)
console.log(v1 !== v2)
console.log(v1 === v3)
console.log(v1 !== v3)
//Vetores não são diretamente comparáveis

console.log('---------Obj---------')
//Objetos
let o1 = {marca: "Volkswagen", modelo: "Fusca", cor: "preto", ano:1969 }
let o3 = {marca: "Volkswagen", modelo: "Fusca", cor: "preto", ano:1969 }  
let o2 = {marca: "Chevrolet", modelo: "Opala", cor: "marrom", ano:1979 }
console.log(o1 > o2)
console.log(o1 < o2)
console.log(o1 === o2)
console.log(o1 !== o2)
console.log(o1 === o3)
console.log(o1 !== o3)
//Obj não são diretamente comparáveis
