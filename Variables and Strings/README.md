# VARIABLES

## DATA TYPES IN JS

1. **Number** - used to store integers and floating point values
2. **String**
3. **Boolean**
4. **Undefined** - when a variable is declared, but not assigned a value
5. **Null** - intentionally set to zero
6. **Object** - key-value pair
7. **Symbol** - always unique and can't be changed
8. **BigInt** - very large number

---

## Variable Initialization

**Process of assigning a value (`=`) to a variable is known as initialization.**

---

## `let`

* reassignation possible

---

## `const`

* variables can't be reassigned or changed i.e. immutable
* variables declared using `"const"` keyword must be assigned a value at the time of declaration, otherwise you will get an error.

---

# STRINGS

* *primitive data type.*

```javascript
let singleQuotes = 'This is a string';
console.log(singleQuotes);

let doubleQuotes = "This is also a string";
console.log(doubleQuotes);
```

Even though you can use single or double quotes to create strings, it's important to be consistent. If a string begins with a single quote, it must also end with a single quote.

---

## String Immutability

strings are immutable. In programming, immutability means that once something is created, it cannot be changed. So, when you create a string, you can't change its characters directly. Instead, you would create a new string if you want to make changes.

Here is an example of assigning a new string to a developer variable:

```javascript
let developer = "Jessica";
console.log(developer);

developer = "Quincy"; // characters modify ni kr skte, uss variable ko h ek dusri string reassign krni pdegi for changes

console.log(developer);
```

---

## String Concatenation

Whenever you use the `+` operator to concatenate strings, it is important to double check for any potential spacing issues.

If you need to add or append to an existing string, then you can use the `+=` operator. This is helpful when you want to build upon a string by adding more text to it over time.

Here's an example of appending one string to another using the `+=` operator:

```javascript
let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // "Hello, John!"
```

It is important to remember that strings are immutable which means once a string is created you can not alter it.

In this case, the original string of `Hello` is not modified. Instead, `greeting` now references the new string of `Hello, John!`

---

## Concatenation Methods

To conclude,

* `+` operator is best for simple concatenation, especially when you need to combine a few strings or variables.
* The `+=` operator is useful when building up a string step by step or appending new content to an existing string variable.
* Finally, the `concat()` method is beneficial when you need to concatenate multiple strings together.

---

## `console.log()` with Multiple Values

You can also pass in multiple values to `console.log()` separated by commas.

For example:

```javascript
let name = "Alice";
let age = 25;

console.log("Name:", name, "Age:", age);
// Name: Alice Age: 25
```

This is helpful for logging multiple pieces of information at once.

---

## Automatic Semicolon Insertion (ASI)

JavaScript has Automatic Semicolon Insertion (ASI) that can add semicolons automatically, explicitly including them improves code clarity and helps prevent errors that may arise from unexpected ASI behavior.



