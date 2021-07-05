const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
