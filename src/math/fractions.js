let a = 13.123456789;
let b = 2.123;
let n = 5;

//Почему нельзя написать let a = a - Math.floor(a);

// vova

const [_, remainder] = a.toString().split('.')
console.log(remainder.substring(0, n))

// vova end

//Так как нам нужен остаток после запятой, вычисляем его:
let aRemainder = a - Math.floor(a);
let bRemainder = b - Math.floor(b);

//Округляем полученные числа до n знаков и умножаем на 100 000 так как нам нужны цифры после запятой
let aFixedToFive = aRemainder.toFixed(n);
let bFixedToFive = bRemainder.toFixed(n)*1e5;


console.log(aFixedToFive, aRemainder);
console.log(aFixedToFive > bFixedToFive, aFixedToFive < bFixedToFive, aFixedToFive >= bFixedToFive, aFixedToFive <= bFixedToFive, aFixedToFive === bFixedToFive, aFixedToFive !== bFixedToFive);