/* Вычислим количество квартир в доме
*/

//Количество подъездов:
let entrances = 2;
//Количество этажей:
let floors = 16;
//Количество квартир на этаже:
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Квартир в подъезде: ', flatsPerEntrance);

let flats = flatsPerEntrance * entrances;
console.log('Квартир в доме: ', flats);