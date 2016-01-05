
console.log(this) //contexto global
console.log(this === window) //true

var developer = {
  name : 'Erik',
  lastName : 'Ochoa',
  isAdult : true,
  completeName: function(){
    return this.name + this.lastName
  }
}
 
console.log(developer.name) // Erik
console.log(developer.lastName) // Ochoa
console.log(developer.isAdult) // true
//We call a function that is stored as a property of an object becoming a method
console.log(developer.completeName()) // ErikOchoa


