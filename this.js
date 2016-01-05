
console.log(this) //contexto global
console.log(this === window); //true

var developer = {
  name : 'Erik',
  lastName : 'Ochoa',
  isAdult : true,
  completeName: this.name + this.lastName

};
 
console.log(developer.name) // Erik
console.log(developer.lastName) // Ochoa
console.log(developer.isAdult) // true
console.log(developer.completeName) // ErikOchoa



