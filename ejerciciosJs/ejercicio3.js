/* 
// Comparaciones con booleanos
console.log(false + false); 0
console.log(false + true); 1
console.log(true + true); 2

// Comparaciones con arrays
console.log([] === []); false, calcula por referencia, no por valor
console.log([] + []); nada 
console.log([1, 2] + [3, 4]); [1,23,4] //concatena
console.log([1] + 1); 11
console.log([1] - 1); 0

// Comparaciones con objetos
console.log({} + {}); [object Object] [object Object] te lanza el toString de cada uno pero sin sumarlos
console.log({} === {}); false, se compara referencia no valor
console.log([] === {}); false, se compara referencia no valor

// Comparaciones especiales
console.log(null + 1); 1 
console.log(undefined + 1); NaN
console.log(null == 0); false  null no es valor
console.log(null <= 0); true   cuando hay operacion aritmetica pasa a numero null
console.log(undefined == null); true

// Operaciones con NaN
console.log(NaN + 1); NaN
console.log(NaN == NaN); false 
console.log(NaN === NaN); false
*/