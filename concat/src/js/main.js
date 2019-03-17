
/*
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
 * devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/
const concat = (a, b) => {
    console.log(...a, ...b);    
};
const vegatables = ["onion", "tomato", "potato", "carrot"];
const drinks = ["water", "wine", "beer", "juice"];

concat(vegatables, drinks);

/*
    * Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
    * entrada (más de 2).
*/
const arr1 = [1,2,3];
const arr2 = [3,4,5];
const arr3 = [6,7,8];
const arr4 = [9,10,11];
const arr5 = [12,13,14];
const arr6 = [15,16,17];

const concat2 = (...list) => {
    const fullArray = arr1.concat(...list);
    console.log(fullArray);
};

concat2(arr2, arr3, arr4, arr5, arr6);
