class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    if (hashCode < 0 || hashCode >= this.buckets.length)
      throw new Error("Trying to access index out of bounds");

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const newNode = new Node(key, value);
    let current = this.buckets[index];

    if (!current) {
      this.buckets[index] = newNode;
      return;
    }

    let prev = null;

    while (current) {
      if (current.key === newNode.key) {
        current.value = newNode.value;
        return;
      }

      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = newNode;
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        return current.value;
      }

      prev = current;
      current = current.nextNode;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        return true;
      }

      prev = current;
      current = current.nextNode;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    let current = this.buckets[index];

    if (current.key === key) {
      this.buckets[index] = current.nextNode;
      return true;
    }

    let prev = current;

    while (current.nextNode) {
      if (current.nextNode.key === key) {
        prev.nextNode = current.nextNode;
        return true;
      }

      prev = current;
      current = current.nextNode;
    }

    return false;
  }

  length() {
    let count = 0;

    for (let i = 0; i < this.capacity; i++) {
      let current = this.buckets[i];

      while (current) {
        count++;
        current = current.nextNode;
      }
    }

    return count;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = null;
    }
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.capacity; i++) {
      let current = this.buckets[i];

      while (current) {
        keys.push(current.key);
        current = current.nextNode;
      }
    }

    return keys;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.capacity; i++) {
      let current = this.buckets[i];

      while (current) {
        values.push(current.value);
        current = current.nextNode;
      }
    }

    return values;
  }
}

export default HashMap;
