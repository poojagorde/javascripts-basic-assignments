const array = ["Pooja", "Rohan", "Amit"]

let newObject = {}

for (let i=0; i < array.length; i++) {
  if (array[i] !== undefined) {
    newObject[i] = array[i]
  }
}
console.log(conver([{ id:1, value: 'Pooja'}, { id:2, value: 'Rohan'},{ id:3, value: 'Amit'}] , 'id'))