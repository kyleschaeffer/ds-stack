import { Stack } from './stack';

test('new stack is instantiated', () => {
  const s = new Stack<number>();
  expect(s.items).toEqual([]);
});

test('item added to stack', () => {
  const s = new Stack<string>();
  s.add('one');
  s.add('two');
  expect(s.items).toEqual(['one', 'two']);
});

test('item removed from stack', () => {
  const s = new Stack<string>();
  s.add('one');
  s.add('two');
  s.add('three');
  const popped = s.remove();
  expect(popped).toBe('three');
  expect(s.items).toEqual(['one', 'two']);
});

test('stack has length', () => {
  const s = new Stack<string>();
  s.add('one');
  s.add('two');
  expect(s.length).toBe(2);
});

test('error on removing from empty stack', () => {
  const s = new Stack<string>();
  s.add('one');
  s.remove();
  expect(() => s.remove()).toThrowError();
});
