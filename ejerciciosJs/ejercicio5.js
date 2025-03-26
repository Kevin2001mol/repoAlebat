/*
# Ejercicio 5, maps

Sigue los siguientes pasos:

1. **Crea un mapa llamado myMap**
2. **Añade los siguientes key-valor al map**

| Clave    | Valor                 |
| -------- | --------------------- |
| moroso   | user (object)         |
| agarrado | user (object)         |
| generoso | user2 (object)        |
| funcion  | findAnimal (function) |
| color    | color (string)        |

3. **Muestra por consola todo el map**
4. **Muestra por consola el key `moroso`**
5. **Comprueba si existe la key `hola`**
6. **Muestra por consola el tamaño total del map**
7. **Recorre el map con un forEach**
8. **Elimina el elemento `agarrado` del map**
9. **Limpia el mapa por completo**
*/
const user={
    name: "Álvaro",
    last: "Morón",
    age: 30,
    nationality: "Morocco",
  };
const user2={
    name: "Manuel",
    last: "Akanji",
    age: 23,
    nationality: "Spain",
  };
const myMap= new Map();
myMap.set("moroso",user);
myMap.set("agarrado",user);
myMap.set("generoso",user2);
myMap.set("funcion",findAnimal());
myMap.set("color","gris");

function findAnimal(){
    return "this animal is an eagle";
}
/*
3. **Muestra por consola todo el map**
  */   
//console.log(myMap);   
/*
4. **Muestra por consola el key `moroso`**
  */
console.log(myMap.keys()); //asi sacas moroso pero pq esta el primero y siempre te saca el primero  

myMap.forEach((value, key) => {
    const generous = "generoso";
    if (key == generous) {
        console.log(`${key}`,value);// imortante separarlo por comas, porqiue si no implicitamente lo etiende como una suma y te saca un toString 
    }
});

/*
5. **Comprueba si existe la key `hola`**
*/
/*
function helloExists(){
    existe = false
myMap.forEach((value,key)=>{
    const generous = "hola";
    if (key == generous) {
        existe= true
        //break;
    }
});
if (existe === false){
    console.log(`NO Existe`);
}else{
    console.log(`Existe`);
}
}
console.log(helloExists);
*/
/*
6. **Muestra por consola el tamaño total del map**
*/
/*
const sizeMap= myMap.size;
console.log( `El tamaño del mapa es de ${sizeMap}`);//tildes
*/
/*
 7. **Recorre el map con un forEach**
 */
/*
 myMap.forEach((value,key)=>{
    console.log(`${key}`, value)
});
*/
/*
8. **Elimina el elemento `agarrado` del map**

*/
myMap.delete("moroso");
console.log(myMap)
/*
9. **Limpia el mapa por completo**


*/
myMap.clear();