/**
 * Stack data structure
 *  - LIFO: "last in first out"
 */
export class Stack<T> {
  /**
   * A stack of items
   */
  private stack: T[];

  /**
   * Create a new stack
   */
  constructor() {
    // New empty stack
    this.stack = [];
  }

  /**
   * Get stack size
   */
  public get length(): number {
    return this.stack.length;
  }

  /**
   * Get items in the stack
   */
  public get items(): T[] {
    return this.stack;
  }

  /**
   * Add an item to the stack
   */
  public add(item: T): void {
    this.stack.push(item);
  }

  /**
   * Remove item from the top of the stack
   */
  public remove(): T {
    // Stack is empty
    if (!this.length) throw new Error('Stack is empty');

    // Pop off the stack
    return this.stack.pop();
  }
}
