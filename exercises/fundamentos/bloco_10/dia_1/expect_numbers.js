// // toBe
// expect(5).toBe("5")

// // toEqual
// test('array and object equality', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

//   expect(arr).toBe([1, 2, 3]); // fails
//   expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//   expect(arr).toEqual([1, 2, 3]); // OK
//   expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
// });

// toThrow
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});