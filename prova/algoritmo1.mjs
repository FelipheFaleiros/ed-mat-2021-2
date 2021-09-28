/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
/*
    MERGE-SORT
    z = nome da função
    y = parâmetro da função (vetor)
    x = meio do vetor
    w = subvetor da esquerda
    v = subvetor da direita
    u = sobra do vetor 
    t = posição do subvetor esquerda
    s = posição do subvetor direita 
    r = resto do vetor
   
    */

const z = (y, fnComp) => {
    if(y.length < 2) return y 
    let x = Math.floor(y.length / 2)
    let w = y.slice(0, x)
    let v = y.slice(x)
    let u
    w = z(w,fnComp)
    v = z(v,fnComp)
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
        if(fnComp(v[s], w[t])) {
            r.push(w[t]) 
        // if(w[t] < v[s]) {
        //     r.push(w[t])
            t++
        }
        else {
            r.push(v[s])
            s++
        }
    }
    if(t < s){
        u = w.slice(t)
    }
    else{ 
        u = v.slice(s)
    }
    return [...r, ...u]
}