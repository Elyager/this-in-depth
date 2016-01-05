// this - hace referencia al propietario de la función en la que se está invocando o en su defecto, al objeto donde dicha función es un método.
// Cuando no se está en una estrucutura definida el propietario es el contexto global

console.log(this) //contexto global
console.log(this === window); //true

//##################################

var myApp = {
  name : 'Erik',
  lastName : 'Ochoa',
  isAdult : true,
  completeName: this.name + this.lastName

};
 
console.log(myApp.name) // Erik
console.log(myApp.lastName) // Ochoa
console.log(myApp.isAdult) // true
console.log(myApp.completeName) // ErikOchoa



