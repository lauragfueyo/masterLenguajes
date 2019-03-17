
/*
 *  Implementa una función clone que, a partir de un objeto de entrada source devuelva
 *  un nuevo objeto con las propiedades de source :
*/
const student =  {name: "Laura", surname: "Gonzalez", age: 36};

function clone(source) {
    const newObject = Object.assign({}, source);
    console.log(newObject);
}
clone(student);

/*
 * Implementa una función merge que, dados dos objetos de entrada source y target ,
 * devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
 * de propiedades con el mismo nombre, source sobreescribe a target .
*/
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge(source, target) {
    const c = {...target, ...source};
    clone(c);
}
merge(a, b);



