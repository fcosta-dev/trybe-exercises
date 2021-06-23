const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger2, number) => ((bigger2 > number) ? bigger2 : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85