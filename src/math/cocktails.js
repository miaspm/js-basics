//Вычислим сколько водки нужно для 500мл кровавой мери
//Запишем все ингредиенты и их количество для 1 порции:
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tobasco = 1;
let worcester = 1;

//Нужное кол-во мл:
let volume = 500;

/*Вычислим коэффициент для вычисления кол-ва напитка
для необходимого объёма*/
let k = (vodka + tomatoJuice + lemonJuice + tobasco + worcester)/volume;

console.log('Для 500мл кровавой мери нужно столько водки (в мл): ', vodka*k)
