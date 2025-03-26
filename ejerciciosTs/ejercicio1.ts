/*
Ejercicio 1, typescript: types e intefaces
-Crea un objeto bird que tenga los siguientes datos:
 name, canEat, canDrink, canSleep, canFly
-Crea un objero dog que tenga los mismos datos que 
pájaro, pero que a demás tenga: race, age
-Crea los tipos/interfaces necesarios para poder trabajar 
con estos datos en TypeScript.

Ejercicio 2
Partiendo del ejercicio 1, haz que la raza (race), 
solo pueda ser Husky, Labrador, Chucho.

Ejercicio 3
-Partiendo del ejercicio anterior, crea un nuevo objeto
 llamado cat que solamente tenga name, color, canSleep
-Partiendo del ejercicio anterior, crea un nuevo objeto 
llamado Snake que solamente tenga canEat, canDrink, canSleep
*/

interface Animal {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
}
type Bird = Animal & {
    canFly: boolean,
}
const smallBird: Bird = { name: "Timmy", canEat: true, canDrink: true, canSleep: false, canFly: true }

type Dog = Animal & {
    race: "Husky" | "Labrador" | "Chucho",
    age: number,
}
//crear perro
const tobyDog: Dog = { name: "Tobby", canEat: true, canDrink: true, canSleep: false, race: "Husky", age: 23 }

type Cat = {
    color: string,
} & Omit<Animal, "canEat" | "canDrink">;

// crear gato 
const kitty: Cat = { name: "Zarpitas", color: "orange", canSleep: true }


type Snake = {
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
} & Omit<Animal, "name">

// crear serpiente
const snake: Snake = { canEat: true, canDrink: true, canSleep: true }

console.log(smallBird)
console.log(tobyDog)
console.log(kitty)
console.log(snake)