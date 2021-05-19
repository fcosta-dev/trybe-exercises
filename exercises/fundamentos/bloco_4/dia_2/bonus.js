// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers2.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers2[index] > numbers2[secondIndex]) {
      let position = numbers2[index];
      numbers2[index] = numbers2[secondIndex];
      numbers2[secondIndex] = position;
    }
  }
}
console.log(numbers2);

