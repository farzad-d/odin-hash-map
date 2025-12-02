import HashMap from "./hash-map.js";
import HashSet from "./hash-set.js";

const sampleMap = new HashMap();

sampleMap.set("apple", "red");
sampleMap.set("banana", "yellow");
sampleMap.set("carrot", "orange");
sampleMap.set("dog", "brown");
sampleMap.set("elephant", "gray");
sampleMap.set("frog", "green");
sampleMap.set("grape", "purple");
sampleMap.set("hat", "black");
sampleMap.set("ice cream", "white");
sampleMap.set("jacket", "blue");
sampleMap.set("kite", "pink");
sampleMap.set("lion", "golden");
sampleMap.set("moon", "silver");

// sampleMap.clear();
// console.log(sampleMap.remove("grape"));
// console.log(sampleMap.get("lion"));
// console.log(sampleMap.has("hat"));
// console.log(sampleMap.keys());
// console.log(sampleMap.values());
// console.log(sampleMap.entries());
// console.log(sampleMap.length);
console.log(sampleMap.buckets);

// ------------------------------------------------------------

// const sampleSet = new HashSet();

// sampleSet.set("apple");
// sampleSet.set("banana");
// sampleSet.set("carrot");
// sampleSet.set("dog");
// sampleSet.set("elephant");
// sampleSet.set("frog");
// sampleSet.set("grape");
// sampleSet.set("hat");
// sampleSet.set("ice cream");
// sampleSet.set("jacket");
// sampleSet.set("kite");
// sampleSet.set("lion");
// sampleSet.set("moon");

// sampleSet.clear();
// console.log(sampleSet.remove("grape"));
// console.log(sampleSet.has("hat"));
// console.log(sampleSet.entries());
// console.log(sampleSet.length);
// console.log(sampleSet.buckets);
