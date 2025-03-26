/* Tenemos una función que saca el nombre completo 
del usuario con el nombre y apellido 
var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreCompleto(usuario));

function nombreCompleto(user) {  
  return "Me llamo " + user.nombre + " " + user.apellido;
}
 */
/*Tenemos una función que calcula el salario anual 
y el nombre del usuario 
const user = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };
  
  function nameComplete(user) {
    const fullName = `${user.name} ${user.last}`;
  
    return `Me llamo ${fullName} y cobro ${calculeSalary(user)}€ al año`;
  }
  function calculeSalary(user) {
    return user.salary * 12;
  }
  
  console.log(nameComplete(user));
*/
/* Si el usuario tiene 30 años y no es español, 
recibirá una ayuda del gobierno de 2000€ */
const user = {
    name: "Álvaro",
    last: "Morón",
    age: 30,
    nationality: "Morocco",
  };
  
  function esExtrangero(user) {
    if (user.nationality == "España" ) {
        return "No es apto para la ayuda del gobierno";
    }
    if(user.age != "30"){
        return "No es apto para la ayuda del gobierno";
    }
    return "Apto para la ayuda del gobierno";
  }
  
  console.log(esExtrangero(user));
