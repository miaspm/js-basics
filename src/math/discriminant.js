//Вычислить дискриминант и корни квадратного уровнения a*x*x^2+b*x+c

let a = 5;
let b = 3;
let c = 7;

//Формула вычисления дискриминанта для кв. уровнения:
let d = b*b-4*a*c;

//Корень из квадратного уровнения с помощью  Math:

rootOfD = Math.sqrt(d);

// Корни их уровнения тоже по стандартной формуле, где x >= 0 (меньше не 
// рассматриваем в этом ДЗ)
let x1 = - b + Math.sqrt(2*a);
let x2 = - b - Math.sqrt(2*a);

console.log('Корни квадратного уровнения: x1 = ', x1, ', x2 = ', x2);