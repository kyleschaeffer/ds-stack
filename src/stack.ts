/**
 * Stack data structure
 *  - LIFO: "last in first out"
 */
export class Stack<T> {
  /**
   * A stack of items
   */
  private stack: IStack<T>;

  /**
   * Current stack size
   */
  private length: number;

  /**
   * Create a new stack
   */
  constructor(...items: T[]) {
    // New empty stack
    this.stack = {};
    this.length = 0;

    // Push items to stack
    this.push(...items);
  }

  /**
   * Get stack size
   */
  public get size(): number {
    return this.length;
  }

  /**
   * Get items in the stack
   */
  public get items(): T[] {
    return Object.values(this.stack);
  }

  /**
   * Push item(s) to the stack
   */
  public push(...items: T[]): void {
    items.forEach(item => {
      this.stack[this.length] = item;
      this.length++;
    });
  }

  /**
   * Pop an item from the top of the stack
   */
  public pop(): T {
    // Stack is empty
    if (!this.length) throw new Error('Stack is empty');

    // Pop off the stack
    const popped: T = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;

    return popped;
  }
}

export interface IStack<T> {
  [index: number]: T;
}
