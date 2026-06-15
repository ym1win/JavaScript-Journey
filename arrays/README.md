# 📚 Table of Contents

- Arrays in JavaScript
- push()
- pop()
- unshift()
- shift()
- Two-Dimensional Arrays
- Array Destructuring
- Reverse a String in JavaScript
- indexOf()
- splice()
- includes()
- Shallow Copy of Arrays
- The slice() Method

---

# JavaScript Arrays – Quick Notes

## Arrays in JavaScript

The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and even other arrays.

Another key characteristic of arrays in JavaScript is that they are dynamic, meaning that their size can change after they are created. You can add or remove elements from an array using various array methods, such as `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, and more.

You can also add new elements to an array by assigning a value to an index that doesn't yet exist:

```js
let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";

console.log(fruits); // ["apple", "banana", "cherry", "date"]
```

---

## push()

The `push()` method is used to add one or more elements to the end of an array. The return value for the `push()` method is the new length of the array. Here's an example of adding a new fruit to the existing fruits array:

```js
const fruits = ["apple", "banana"];

const newLength = fruits.push("orange");

console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]
```

---

## pop()

The next method we will look at is the `pop()` method. The `pop()` method removes the last element from an array and returns that element. It also modifies the original array. Here's how it works:

```js
let fruits = ["apple", "banana", "orange"];

let lastFruit = fruits.pop();

console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
```

---

## unshift()

The `unshift()` method adds one or more elements to the beginning of an array and returns its new length. It works similarly to `push()`, but modifies the start of the array instead of the end.

---

## shift()

The `shift()` method removes the first element from an array and returns that element. It's similar to `pop()`, but it works at the beginning of the array instead of the end.

---

## Two-Dimensional Arrays

It's worth noting that in JavaScript, two-dimensional arrays are actually arrays of arrays. This means each element of the outer array is itself an array. This nested structure allows for great flexibility but also requires careful handling to avoid errors.

---

## Array Destructuring

## What Is Array Destructuring, and How Does It Work?

Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking array elements into distinct variables.

This technique is particularly useful when working with arrays and functions that return multiple values. Here is an example of using array destructuring:

```js
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

In this example, we have an array called fruits with three elements. Using array destructuring, we assign the first element to the variable first, the second element to second, and the third element to third. This allows us to easily access individual elements of the array without using index notation.

Here is what it would look like if you accessed each of those elements by their index instead of using array destructuring:

```js
const fruits = ["apple", "banana", "orange"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"
```

Array destructuring also allows you to skip elements you're not interested in by using commas. For instance:

```js
let colors = ["red", "green", "blue", "yellow"];

let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
```

In this example, we skip the second element of the colors array by using an extra comma. This assigns red to firstColor and blue to thirdColor, effectively ignoring green.

Another powerful feature of array destructuring is the ability to use default values. If the array has fewer elements than the variables you're trying to assign, you can provide default values:

```js
let numbers = [1, 2];

let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Here, we assign default value 3 to c because the numbers array doesn't have a third element.

Now, let's discuss the rest syntax, denoted by three dots (`...`). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array. Here's how it works:

```js
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```

In this example, first and second capture the first two elements of the fruits array, and rest captures all remaining elements as a new array. The rest syntax must be the last element in the destructuring pattern.

Array destructuring is a powerful feature that can make your code more concise and easier to read. It's especially useful when working with arrays, and when you need to extract specific elements from an array.

---

## Reverse a String in JavaScript

JavaScript using a combination of string and array methods. The process involves three main steps:

1. Splitting the string into an array of characters.
2. Reversing the array.
3. Joining the characters back into a string.

Let's explore each of these steps using the `split()`, `reverse()`, and `join()` methods.

### Reverse a String in JavaScript (Short Notes)

### Steps to Reverse a String:

* `split("")` → Converts a string into an array of characters.
* `reverse()` → Reverses the array elements in place.
* `join("")` → Combines the array back into a string.

### Example:

```js
let str = "hello";

let reversed = str
  .split("")    // ["h", "e", "l", "l", "o"]
  .reverse()    // ["o", "l", "l", "e", "h"]
  .join("");    // "olleh"

console.log(reversed); // "olleh"
```

### Method Summary:

* `split(separator)` → String → Array
* `""` → splits into characters
* `" "` → splits by spaces
* `"-"` → splits by dashes
* `reverse()` → Reverses array elements (modifies original array).
* `join(separator)` → Array → String
* `""` → joins without spaces.

### One-Line Solution:

```js
str.split("").reverse().join("");
```

### Formula:

String → `split("")` → `reverse()` → `join("")` → Reversed String

Remember that strings in JavaScript are immutable, which means you can't directly reverse a string by modifying it. That's why we need to convert it to an array, reverse the array, and then convert it back to a string.

---

## indexOf()

The `indexOf()` method is useful for finding the first index of a specific element within an array. If the element cannot be found, then it will return `-1`. Here is the basic syntax:

```js
array.indexOf(element, fromIndex)
```

`element` represents the value you want to search for within the array, and the `fromIndex` parameter is the position from which the search should start. The `fromIndex` parameter is optional. If `fromIndex` is not provided, the search starts from the beginning of the array. Let's look at an example:

```js
let fruits = ["apple", "banana", "orange", "banana"];

let index = fruits.indexOf("banana");

console.log(index); // 1
```

---

# JavaScript splice() Method – Short Notes

## 🔹 What is splice()?

Used to add, remove, or replace elements in an array.

Modifies the original array (mutates it).

Returns an array of removed elements.

## 🔹 Syntax

```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```

| Parameter       | Meaning                       |
| --------------- | ----------------------------- |
| startIndex      | Position to start changes     |
| deleteCount     | Number of elements to remove  |
| item1, item2... | Elements to insert (optional) |


## 1️⃣ Remove Elements

```js
let fruits = ["apple", "banana", "orange", "mango"];

fruits.splice(2, 1);
```

✅ Removes `"orange"`

### Result:

```js
["apple", "banana", "mango"]
```

---

## 2️⃣ Add Elements

```js
let colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow");
```

✅ Adds `"yellow"` at index `1`

### Result:

```js
["red", "yellow", "green", "blue"]
```

`0` means don't remove anything.

---

## 3️⃣ Replace Elements (Remove + Add)

```js
let numbers = [1, 2, 3, 4];

numbers.splice(1, 2, 6, 7);
```

✅ Removes `2`, `3` and inserts `6`, `7`

### Result:

```js
[1, 6, 7, 4]
```

---

## 4️⃣ Keep Original Array Unchanged

```js
let copy = [...original];

copy.splice(...);
```

✅ Use the spread operator `(...)` to create a shallow copy before using `splice()`.

---

## 5️⃣ Remove Element by Value

```js
let index = fruits.indexOf("orange");

if (index !== -1) {
    fruits.splice(index, 1);
}
```

✅ `indexOf()` finds the element's index.
✅ `-1` means element not found.

---

## 6️⃣ Clear Entire Array

```js
array.splice(0);
```

### Result:

```js
[]
```

---

## ⚠️ Important Points

* `splice()` changes the original array.
* Returns removed elements.
* Efficient for middle modifications.
* Can be slower on large arrays, especially at the beginning (because elements shift).

---

## 🧠 Quick Memory Trick

```js
splice(start, deleteCount, addItems...)
```

Delete only:

```js
splice(2, 1)
```

Add only:

```js
splice(2, 0, "new")
```

Replace:

```js
splice(2, 1, "new")
```

---

## includes()

It's worth noting that `includes()` uses the strict equality comparison (`===`), which means it can distinguish between different types. For example:

```js
let mixedArray = [1, "2", 3, "4", 5];

console.log(mixedArray.includes(2));   // false
console.log(mixedArray.includes("2")); // true
```

In this case, the number `2` and the string `"2"` are considered different data types. So, the first `console.log` will return `false`, while the second `console.log` will return `true`.

The `includes()` method is a powerful tool for checking the presence of elements in arrays. It's simple to use, efficient, and can save you from writing more complex loops or conditions to search through arrays. Whether you're working with strings, numbers, or mixed data types, `includes()` provides a straightforward way to verify if a value exists in your array.

---

# 📌 JavaScript: Shallow Copy of Arrays – Short Notes

## 🔹 What is a Shallow Copy?

A shallow copy creates a new array containing the same elements as the original array.

✅ The outer array is different (new memory location).
⚠️ Nested arrays/objects are shared references.

---

## 🧠 Primitive vs Reference Values

### Primitive Values (Number, String, Boolean)

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
```

✅ Modifying `arr2` does NOT affect `arr1`.

---

### Reference Values (Arrays/Objects)

```js
const arr1 = [[1, 2], [3, 4]];

const arr2 = [...arr1];

arr2[0].push(5);
```

### Result:

```js
arr1; // [[1, 2, 5], [3, 4]]
arr2; // [[1, 2, 5], [3, 4]]
```

⚠️ Both arrays share the same inner arrays.

---

# Ways to Create a Shallow Copy

## 1️⃣ Using concat()

```js
const copy = [].concat(original);
```

### Example:

```js
const original = [1, 2, 3];

const copy = [].concat(original);
```

✅ Creates a new shallow copy.

---

## 2️⃣ Using slice()

```js
const copy = original.slice();
```

### Example:

```js
const original = [1, 2, 3];

const copy = original.slice();
```

✅ Returns a shallow copy of the entire array.

---

## 3️⃣ Using Spread Operator (...) ⭐ (Most Common)

```js
const copy = [...original];
```

### Example:

```js
const original = [1, 2, 3];

const copy = [...original];
```

✅ Shortest and modern ES6 syntax.

---

# Independence of Top-Level Array

```js
const original = [1, 2, 3];

const copy = [...original];

copy.push(4);
```

### Result:

```js
original; // [1, 2, 3]

copy;     // [1, 2, 3, 4]
```

✅ Changes to the copied array do not affect the original array.

---

## ⚠️ Important Points

* Creates a new outer array.
* Nested arrays/objects are NOT copied deeply.
* Useful when you want to:

  * Add elements
  * Remove elements
  * Reorder elements
  * Keep the original array unchanged

---

## 📊 Comparison Table

| Method          | Syntax           |
| --------------- | ---------------- |
| `concat()`      | `[].concat(arr)` |
| `slice()`       | `arr.slice()`    |
| Spread Operator | `[...arr]`       |

---

## 🧠 Memory Trick

**Shallow Copy = New Box 📦**
**Deep Copy = New Box + New Items 📦✨**

Shallow Copy: Outer array copied, inner references shared.
Deep Copy: Everything copied independently.

## The slice() Method

The `slice()` method is used to extract a portion of an array and return it as a new array without modifying the original array.

---

## Syntax

```js
array.slice(start, end)
```

| Parameter | Description                |
| --------- | -------------------------- |
| `start`   | Starting index (inclusive) |
| `end`     | Ending index (exclusive)   |

* Inclusive: `start` index is included.
* Exclusive: `end` index is NOT included.

---

# Examples

## 1. Extract a part of an array

```js
let fruits = ["apple", "banana", "orange", "mango"];

let result = fruits.slice(1, 3);

console.log(result); // ["banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange", "mango"]
```

✅ Original array remains unchanged.

---

## 2. Create a shallow copy of an array

```js
let numbers = [1, 2, 3];

let copy = numbers.slice();

console.log(copy); // [1, 2, 3]
```

---

## 3. Omitting the end parameter

```js
let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(2)); // [30, 40, 50]
```

Starts from index `2` and goes till the end.

---

## 4. Using negative indices

```js
let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(-2)); // [40, 50]
console.log(arr.slice(-4, -1)); // [20, 30, 40]
```

Negative indices count from the end of the array.

---

# Important Points

* ✅ Returns a new array
* ✅ Does NOT modify the original array
* ✅ Can be used to create shallow copies
* ✅ Supports negative indexing

---

# slice() vs splice()

| Feature                  | `slice()`             | `splice()`                  |
| ------------------------ | --------------------- | --------------------------- |
| Modifies original array? | ❌ No                  | ✅ Yes                       |
| Returns                  | Extracted portion     | Removed elements            |
| Purpose                  | Copy/extract elements | Add/remove/replace elements |

---

# Quick Memory Trick

```text
slice()  → Select 📋 (No changes)
splice() → Surgery ✂️ (Changes original)
```

---

## One-line Definition:

`slice()` extracts elements from an array into a new array without changing the original array.