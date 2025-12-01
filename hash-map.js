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

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length)
      throw new Error("Trying to access index out of bounds");

    const newNode = new Node(key, value);
    let bucket = this.buckets[index];

    if (!bucket) {
      this.buckets[index] = newNode;
      return;
    }

    let current = bucket;
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
}

export default HashMap;
