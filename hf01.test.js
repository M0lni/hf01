/*const sum = require('./hf');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});*/

const koszones=require('./hf');

test('Tests for no input', () => {
    expect(koszones("")).toBe("Hello, my friend");
  });