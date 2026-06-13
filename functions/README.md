# JavaScript Functions – Quick Notes

## Function Call (Invocation)

A function call, or invocation, is when we actually use or execute the function. To call a function, you will need to reference the function name followed by a set of parentheses:

```js
function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"
```

---

## Parameters and Arguments

Parameters act as placeholders for the values that will be passed to the function when it is called. They allow functions to accept input and work with that input. Arguments are the actual values passed to the function when it is called. Here is an updated version of the greet function that uses parameters and arguments:

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!
```

The `name` serves as the parameter while the strings `Alice` and `Nick` serve as the arguments. Now we have a reusable function that can be used dozens of times throughout our code with different arguments.

---

## Return Values

When a function finishes its execution, it will always return a value. By default, the return value will be `undefined`.

If you need your function to return a specific value, then you will need to use the `return` statement.

---

## Anonymous Functions

An anonymous function is a function without a name that can be assigned to a variable like this:

```js
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7
```

---

# JavaScript Arrow Functions - Short Notes 📝

## What are Arrow Functions?

* A shorter way to write functions in JavaScript.
* Introduced in ES6 (ECMAScript 2015).
* Use the `=>` (arrow) syntax.

---

## 1. Basic Syntax

### Regular Function:

```js
function greet(name) {
    console.log("Hello " + name);
}
```

### Arrow Function:

```js
const greet = (name) => {
    console.log("Hello " + name);
};
```

---

## 2. Parameter Rules

### No Parameters → `()` Required

```js
const greet = () => {
    console.log("Hello");
};
```

### One Parameter → `()` Optional

```js
const greet = name => {
    console.log(name);
};
```

### Multiple Parameters → `()` Required

```js
const add = (a, b) => {
    return a + b;
};
```

---

## 3. Single-Line Function Body

If the function body has only one statement, curly braces `{}` can be omitted.

```js
const greet = name => console.log("Hello " + name);
```

---

## 4. Implicit Return

### With Curly Braces `{}` → Use `return`

```js
const add = (a, b) => {
    return a + b;
};
```

### Without Curly Braces `{}` → `return` is Automatic

```js
const add = (a, b) => a + b;
```

❌ Wrong:

```js
const add = (a, b) => return a + b;
```

---

## Quick Memory Rules

| Situation           | Syntax            |
| ------------------- | ----------------- |
| No parameters       | `() => {}`        |
| One parameter       | `param => {}`     |
| Multiple parameters | `(a, b) => {}`    |
| One-line return     | `(a, b) => a + b` |
| Using `{}`          | Must use `return` |

---

## Examples

```js
const square = num => num * num;

const sayHello = () => console.log("Hello");

const multiply = (a, b) => a * b;
```

---

## Key Points to Remember

* Arrow functions are shorter versions of regular functions.
* Use `=>` instead of the `function` keyword.
* For single-line returns, omit `{}` and `return`.
* Widely used in modern JavaScript and React.

---

## Golden Formula:

```js
function add(a, b) {
    return a + b;
}
```

⬇️

```js
const add = (a, b) => a + b;
```

Arrow Functions = Cleaner + Shorter Functions

---

# Scope

Scope = Where a variable can be accessed.

---

## 1. Global Scope 🌍

Declared outside all functions/blocks.

Accessible everywhere.

```js
let globalVar = "Hello";
```

⚠️ Use sparingly (can cause conflicts).

---

## 2. Local (Function) Scope 🔒

Declared inside a function.

Accessible only within that function.

```js
function greet() {
    let message = "Hello";
}
```

❌ Cannot access outside the function.

---

## 3. Block Scope 📦

Declared using `let` or `const` inside `{}`.

Accessible only inside that block (`if`, `for`, `while`, etc.).

```js
if (true) {
    let x = 10;
}
```

❌ Cannot access outside the block.
