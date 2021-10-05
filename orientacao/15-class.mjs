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
    #sabe
    #altura
    #tipo

    /*
        Além de variáveis (atributos), classes podem canter também funções,
        que são chamadas, nesse caso, de MÉTODO. Existe um método especial,
        chamado "constructor", que é invocado toda vez que se tenta criar
        um objeto a partir da classe.
    */

    constructor (base, altura, peso){
        //O construtor recebe dados externos: base, altura, e tipo
        // e os armazena os atributos internos #sabe #altura e #tipo.
        //Toda vez que nos referimos a uma atributo ou método (que pertencem 
        //à classe), precisamos prefixá-los com this + ponto.

        this.#base = base
        this.#altura = altura
        this.#tipo = tipo
    }
}