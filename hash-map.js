class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

class HashMap {
  constructor(capacity = 16) {
    this.length = 0;
    this.loadFactor = 0.75;
    this.capacity = capacity;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    key = String(key);
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  ensureCapacity() {
    const loadRatio = this.length / this.capacity;
    if (loadRatio < this.loadFactor) return;

    const savedEntries = this.entries();
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);
    this.length = 0;
    savedEntries.forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    this.ensureCapacity();
    const index = this.hash(key);
    const newEntry = new Entry(key, value);
    let current = this.buckets[index];

    if (!current) {
      this.buckets[index] = newEntry;
      this.length++;
      return;
    }

    let prev = null;

    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = newEntry;
    this.length++;
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) return current.value;
      current = current.nextNode;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) return true;
      current = current.nextNode;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    let current = this.buckets[index];

    if (!current) return;

    if (current.key === key) {
      this.buckets[index] = current.nextNode;
      this.length--;
      return true;
    }

    while (current.nextNode) {
      if (current.nextNode.key === key) {
        current.nextNode = current.nextNode.nextNode;
        this.length--;
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.length = 0;
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

  entries() {
    let entries = [];

    for (let i = 0; i < this.capacity; i++) {
      let current = this.buckets[i];

      while (current) {
        entries.push([current.key, current.value]);
        current = current.nextNode;
      }
    }

    return entries;
  }
}

export default HashMap;
