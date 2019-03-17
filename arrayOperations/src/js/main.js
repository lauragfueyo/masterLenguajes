
/* 
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga 
 * y devuelva su primer elemento. Utiliza destructuring.
*/
const house = ["kitchen", "bedroom", "bathroom", "livinroom"];
const head = ([first, ...others]) => first;

console.log(head(house));


/*
 * Implementa una función tail (inmutable), tal que, dado un array como entrada
 * devuelta todos menos el primer elemento. Utiliza rest operator.
*/
const animals = ["cat", "dog", "bird", "monkey", "shark", "lyon"];
const tail = ([first, ...others]) => others; // Implementation here.

console.log(tail(animals));


/*
 * Implementa una función init (inmutable), tal que, dado un array como entrada
 * devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
*/
const fruits = ["apple", "orange", "strawberry", "watermelon"];
const init = array => array.slice(0,-1);

console.log(init(fruits));


/*
 * Implementa una función last (inmutable), tal que, dado un array como entrada
 * devuelva el ultimo elemento.
*/
const cars = ["ford", "bmw", "mercedes", "kia"];
const last = list => list.pop();

console.log(last(cars));

