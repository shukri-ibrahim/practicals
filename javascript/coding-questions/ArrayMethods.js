// Defining an Array 
let family = ['shukri' , 'barwaqo' ,'ayan', 'faisal']

//Length = family.length
console.log(family.length);

//Access elements
console.log(family[1]);

//print whole Array
console.log(family);

// Array modification
family[family.length-4]
//change faisal to abdihakin
family[family.length-1] ='abdihakin'
console.log(family);

// Add new value at the end of the Array 
family.push('nimo')
console.log(family);

family.unshift( 'faizo')
console.log(family);

//Remove a value at the end of the Array
family.pop();
console.log(family);

//Remove a value at the beginning of the Array
family.shift();
console.log(family);

//get index of an Array element
console.log(family.indexOf('barwaqo'))

//print barwaqo
console.log(family[family.indexOf('barwaqo')])