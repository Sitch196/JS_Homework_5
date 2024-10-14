class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || !isFinite(maxSize) || maxSize <= 0) {
      throw new Error("Invalid stack size");
    }

    this.maxSize = maxSize;
    this.top = null;
    this.size = 0;
  }

  push(element) {
    if (this.size >= this.maxSize) {
      throw new Error("Stack is full");
    }

    const newNode = new Node(element);

    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const poppedNode = this.top;

    this.top = this.top.next;
    this.size--;

    return poppedNode.value;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let currentNode = this.top;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
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
