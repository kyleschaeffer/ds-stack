import { Stack } from './stack';

test('new stack is instantiated', () => {
  const s = new Stack<number>(1, 2, 3);
  expect(s.items).toEqual([1, 2, 3]);
});

test('items are pushed to stack', () => {
  const s = new Stack<string>('one', 'two');
  s.push('three');
  expect(s.items).toEqual(['one', 'two', 'three']);
});

test('item removed from stack', () => {
  const s = new Stack<string>('one', 'two', 'three');
  const popped = s.pop();
  expect(popped).toBe('three');
  expect(s.items).toEqual(['one', 'two']);
});

test('stack has size', () => {
  const s = new Stack<string>('one', 'two');
  expect(s.size).toBe(2);
});

test('error on removing from empty stack', () => {
  const s = new Stack<string>();
  expect(() => s.pop()).toThrowError();
});
