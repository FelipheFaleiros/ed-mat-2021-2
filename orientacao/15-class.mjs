//Normalmente, se usa inicial maiúscula para nomear classes
class FormaGeometrica {

    /*
     
        Variáveis usadas de uma classe são chamadas de ATRIBUTOS
        Existem dois tipos de atributos:
        1) Atributo PÚBLICO: pode ser acessado tanto de dentro quanto de fora da classe
        2) Atributo PRIVADO: só pode ser acessado de dentro da classe. 
            Em JS, os nomes de atributos privados sevem iniciar com uma #.
     */

    //Declaração de atributos PRIVADOS - note que não usamos let, var ou const
    #base
    #altura
    #tipo

    /*
        Além de variáveis (atributos), classes podem canter também funções,
        que são chamadas, nesse caso, de MÉTODO. Existe um método especial,
        chamado "constructor", que é invocado toda vez que se tenta criar
        um objeto a partir da classe.
    */

    constructor (base, altura, tipo){
        //O construtor recebe dados externos: base, altura, e tipo
        // e os armazena os atributos internos #sabe #altura e #tipo.
        //Toda vez que nos referimos a uma atributo ou método (que pertencem 
        //à classe), precisamos prefixá-los com this + ponto.

        //Validações
        /*
        if(typeof base !== "number" || base <=0){
            //ERROR
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.")
        }

        if(typeof altura !== "number" || altura <= 0){
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.")
        }

        // if(tipo !== 'R' && tipo !== 'T' && tipo !== 'E' ){
        if(! ['R', 'T', 'E'].includes(tipo)){ //outra forma de fazer
            throw new Error("ERRO: Tipo precisar ser R, T ou E.")
        }
        */
       /*
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo
        */

       //Chamando os setters das propriedades para fazer a validação
       this.base = base
       this.altura = altura
       this.tipo = tipo
       
    }

    //Retornar valor da classe
    //Função getter: têm a finalidade de tornar visível ao mundo externo informações armazenada em atributos privados de classe.
    get base(){
        return this.#base
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        return this.#tipo
    }

    //Funções setter: permitem que o valor de atributos privados sejam alterados do lado de fora da classe.
    set base(valor){
        // console.log(`base alterada para ${valor}`)

        if(typeof valor !== "number" || valor <=0){
            //ERROR
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.")
        }
        this.#base = valor
    }
    set altura(valor) {
        if(typeof valor !== "number" || valor <= 0){
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.")
        }
        this.#altura = valor
    }
    set tipo(valor){
        if(! ['R', 'T', 'E'].includes(valor)){ //outra forma de fazer
            throw new Error("ERRO: Tipo precisar ser R, T ou E.")
        }
        this.#tipo = valor
    }

    /*
        PROPRIEDADES: são abstrações presentes em um classe que permitem ler e/ou
        alterar o valor de um atributo privado.
        Uma propriedade é formada, pelo menos, por uma função getter.
        Propriedades de leitura e escrita têm tanto um getter quanto um setter.
        O nome da propriedade é o nome das funções getter/setter correspondentes.
    */

    //Método público
    calAre(){
        switch(this.tipo){
            case 'R':
                return this.base * this.altura
            case 'T' :
                return this.base * this.#altura /2
            case 'E' :
                return (this.base /2) * (this.altura /2) * Math.PI
        }
    }

    //Alternativa: propriedade somente-leitura (só possui o getter)
    get area() {
        switch(this.tipo){
            case 'R':
                return this.base * this.altura
            case 'T' :
                return this.base * this.#altura /2
            case 'E' :
                return (this.base /2) * (this.altura /2) * Math.PI
        }
    }
    
}
/**********/
//Fora da classe

//Criando objetos a partir da classe
let forma1 = new FormaGeometrica(15,16, 'T') //Isso chamará o construtor da classe

//Uma função getter é chamada SE< a utilização dos parênteses
console.log(forma1.base, forma1.altura, forma1.tipo)
// print(forma1.#base) isso não funciona por ser uma classe privada

let forma2 = new FormaGeometrica(9.5, 1, "T")
console.log(forma2.base, forma2.altura, forma2.tipo)

forma1.base = 7 //chama a função setter
forma1.altura = 22.5 //chama a função setter
forma1.tipo = 'R' //chama a função setter
console.log(forma1.base, forma1.altura, forma1.tipo)

let forma3 = new FormaGeometrica(14,10, 'E')

console.log('Área da forma1:', forma1.calAre())
console.log('Área da forma2:', forma2.calAre())
console.log('Área da forma3:', forma3.calAre())

//uso a propriedade como atributo normal 
console.log('Área da forma1:', forma1.area)
console.log('Área da forma2:', forma2.area)
console.log('Área da forma3:', forma3.area)

//A propriedade "área" é somente-leitura - não pode ser modificada
//forma2.area = 175