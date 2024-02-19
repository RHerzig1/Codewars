// Write a class that pushes, pops, and returns the minimum value of an array in constant time.

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    const minStackLast = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(val, minStackLast ?? val));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

// https://leetcode.com/problems/min-stack/description/
