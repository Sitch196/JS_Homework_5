class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || !isFinite(maxSize) || maxSize <= 0) {
      throw new Error("Invalid stack size");
    }

    this.maxSize = maxSize;
    this.storage = {};
    this.top = 0;
  }

  push(element) {
    if (this.top >= this.maxSize) {
      throw new Error("Stack is full");
    }

    this.storage[this.top] = element;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    this.top--;

    const poppedElement = this.storage[this.top];

    delete this.storage[this.top];

    return poppedElement;
  }

  peek() {
    return this.isEmpty() ? null : this.storage[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  toArray() {
    return Object.values(this.storage);
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error("Argument is not iterable");
    }

    const stack = new Stack(iterable.length);

    for (const element of iterable) {
      stack.push(element);
    }

    return stack;
  }
}
