
console.log(this) //contexto global
console.log(this === window) //true

var developer = {
  name : 'Erik',
  lastName : 'Ochoa',
  isAdult : true,
}
var developerJr = {
  name : 'Iker',
  lastName : 'Ochoa',
  isAdult : false,
}

var printName = function(){
  console.log( this.name + ' ' + this.lastName );
}

var printNameAndAge = function(age){
  console.log( this.name + ' ' + this.lastName + 'Age: ' + age);
}

console.log(developer.name) // Erik
console.log(developer.lastName) // Ochoa
console.log(developer.isAdult) // true
printName.call(developer)
printNameAndAge.call(developer, 29)
// .apply hace lo mismo sólo que permite mandar un arreglo como parametro

console.log(developerJr.name) // Erik
console.log(developerJr.lastName) // Ochoa
console.log(developerJr.isAdult) // true
printName.call(developerJr)
printNameAndAge.call(developerJr, 13)
