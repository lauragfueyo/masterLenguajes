/*
 * Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se
 * ha leído o no dicho libro.
 * Un libro es un objeto con title como string y isRead como booleano. En caso de no
 * existir el libro devolver false
*/
const books: { tittle: string, isRead: boolean }[] = [
    {tittle: 'Harry Potter y la piedra filosofal', isRead: true},
    {tittle: 'Canción de hielo y fuego', isRead: false},
    {tittle: 'Devastación', isRead: true}
];

function isBookRead(list, tittleToSearch) {
    const book =  list.find(item => item.tittle === tittleToSearch && item.isRead === true);
    if(book){
        return true;
    } else {
        return false;
    }    
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false