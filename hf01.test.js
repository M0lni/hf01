/*const sum = require('./hf');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});*/

const koszones=require('./hf');

test('Tests for no input', () => {
    expect(koszones("")).toBe("Hello, my friend.");
  });

test('Tests for 1 input', () => {
    expect(koszones("Fred")).toBe("Hello, Fred.");
  });

test('Tests for shouting', () => {
    expect(koszones("BOB")).toBe("HELLO, BOB!");
  });
test('Tests for multiple names', () => {
    expect(koszones("Sam, Dave, Bob")).toBe("Hello, Sam, Dave and Bob.");
  });
  test('Tests for multiple names that can be uppercase', () => {
    expect(koszones("Sam, DAVE, Bob, FERENC")).toBe("Hello, Sam and Bob. AND HELLO DAVE AND FERENC");
  });