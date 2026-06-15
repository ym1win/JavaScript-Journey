# 📘 JavaScript Objects – Comprehensive Notes

> A professional, revision-friendly reference for JavaScript Objects — ideal for interview prep and GitHub documentation.

---

## 📚 Table of Contents

- [What is an Object in JavaScript?](#what-is-an-object-in-javascript)
- [Creating an Object](#creating-an-object)
- [Accessing Object Properties](#accessing-object-properties)
  - [Dot Notation (.)](#1-dot-notation-)
  - [Bracket Notation ([])](#2-bracket-notation-)
  - [Dynamic Property Access](#dynamic-property-access)
- [How Can You Remove Properties from an Object?](#how-can-you-remove-properties-from-an-object)
  - [delete Operator](#1-delete-operator)
  - [Destructuring Assignment with Rest Parameters](#2-destructuring-assignment-with-rest-parameters)
- [How to Check If an Object Has a Property?](#how-to-check-if-an-object-has-a-property)
  - [hasOwnProperty() Method](#1-hasownproperty-method)
  - [Object.hasOwn() Method (Modern & Recommended)](#2-objecthasown-method-modern--recommended)
  - [in Operator](#3-in-operator)
  - [Checking Against undefined](#4-checking-against-undefined)
- [Accessing Properties from Nested Objects and Arrays in Objects](#accessing-properties-from-nested-objects-and-arrays-in-objects)
  - [Accessing Properties from Nested Objects](#1-accessing-properties-from-nested-objects)
  - [Accessing Arrays Inside Objects](#2-accessing-arrays-inside-objects)
- [Primitive vs Non-Primitive Data Types](#primitive-vs-non-primitive-data-types)
  - [Primitive Data Types](#primitive-data-types)
  - [Non-Primitive Data Types (Reference Types)](#non-primitive-data-types-reference-types)
- [Functions vs Object Methods](#functions-vs-object-methods)
  - [Functions](#functions)
  - [Object Methods](#object-methods)
  - [Role of this](#role-of-this)
- [Object() Constructor](#object-constructor)
  - [What is the Object() Constructor?](#what-is-the-object-constructor)
  - [Creating an Empty Object](#creating-an-empty-object)
  - [Using Object() Without new](#using-object-without-new)
  - [Passing null or undefined](#passing-null-or-undefined)
  - [Working with Unknown Types](#working-with-unknown-types)
  - [When Should You Use Object()?](#when-should-you-use-object)

---

## What is an Object in JavaScript?

An object is a fundamental data structure that allows you to store and organize related data and functionality.
You can think of an object as a container that holds various pieces of information.
These pieces of information are called **properties**, and they consist of a name (key) and a value.

```js
const exampleObject = {
  propertyName: value,
}
```

Objects are incredibly versatile and form the backbone of JavaScript.
Almost everything in JavaScript is an object or can be treated as one, including arrays, functions, and primitive data types in certain ways.

---

## Creating an Object

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
```

- `name`, `age`, and `city` are properties.
- Each property has a name and a value, separated by a colon (`:`).

---

## Accessing Object Properties

JavaScript provides two main ways to access object properties:

### 1. Dot Notation (`.`)

**Syntax:**

```js
objectName.propertyName
```

**Example:**

```js
console.log(person.name); // Alice
console.log(person.age);  // 30
```

**Dot Notation:**

- Most common and straightforward way to access properties.
- Concise and easy to read.
- Preferred when:
  - You know the exact property name.
  - The property name is a valid JavaScript identifier (doesn't start with a number and doesn't contain spaces or special characters).

---

### 2. Bracket Notation (`[]`)

**Example:**

```js
console.log(person["name"]); // Alice
console.log(person["age"]);  // 30
```

**Bracket Notation:**

- Accesses properties using a string inside square brackets.
- More flexible than dot notation.
- Used when property names:
  - Aren't valid JavaScript identifiers.
  - Contain spaces.
  - Start with numbers.

**Example:**

```js
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);         // Hello
console.log(oddObject["property with spaces"]); // World
```

---

### Dynamic Property Access

Bracket notation allows you to use variables to access properties dynamically.

```js
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
```

Useful when:

- You don't know the exact property name while writing the code.
- Property names come from user input or another dynamic source.

---

## How Can You Remove Properties from an Object?

JavaScript provides several ways to remove properties from an object. The `delete` operator is the most straightforward and commonly used method.

### 1. `delete` Operator

Removes the selected property from the object.

**Syntax:**

```js
delete objectName.propertyName;
```

**Example:**

```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
```

> 💡 **Key Points:**
>
> - The `job` property is removed from the `person` object.
> - After deletion, accessing the removed property returns `undefined`.

---

### 2. Destructuring Assignment with Rest Parameters

- Does **not** actually delete the property.
- Creates a new object **without** the specified properties.

**Example:**

```js
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

console.log(remainingProperties);
// { name: "Bob", age: 25 }
```

> 💡 **Key Points:**
>
> - `job` and `city` are extracted from the object.
> - `remainingProperties` contains all remaining properties.
> - The original object remains unchanged.

---

## How to Check If an Object Has a Property?

**Why Check for Properties?**

- Important when working with objects, especially with external data sources.
- Helps ensure certain properties exist before using them.

JavaScript provides four common ways to check if an object has a property:

### 1. `hasOwnProperty()` Method

Returns a boolean indicating whether the object has the specified property as its own property.

**Example:**

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false
```

> 💡 **Key Points:**
>
> - Returns `true` if the property exists directly on the object.
> - Returns `false` if the property does not exist.

---

### 2. `Object.hasOwn()` Method (Modern & Recommended)

The modern, recommended, and safer way to check if an object has a property as its own property (not inherited).

**Syntax:**

```js
Object.hasOwn(object, propertyName)
```

**Example:**

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job"));  // false
```

> ⚠️ **Important:**
>
> `Object.hasOwn()` checks only if the property **exists**.
> It does **not** care about the property's value.

```js
const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null
};

console.log(Object.hasOwn(user, "score"));    // true
console.log(Object.hasOwn(user, "isActive")); // true
console.log(Object.hasOwn(user, "nickname")); // true
console.log(Object.hasOwn(user, "email"));    // false
```

**Why not use `if(property)`?**

```js
if (user.score) {
  console.log("Has score"); // Won't print because 0 is falsy
}
```

> ✅ **Safe Approach:**

```js
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score);
}
```

---

### 3. `in` Operator

Returns `true` if the property exists on the object.

**Example:**

```js
const person = {
  name: "Bob",
  age: 25
};

console.log("name" in person); // true
```

> 💡 **Key Point:**
>
> Checks whether a property exists in the object.

---

### 4. Checking Against `undefined`

Checks if a property is not `undefined`.

**Example:**

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
```

> ⚠️ **Limitation:**
>
> Can give false negatives if a property exists but its value is explicitly `undefined`.

---

## Accessing Properties from Nested Objects and Arrays in Objects

**Working with Nested Objects and Arrays**

- JavaScript often uses nested objects and arrays within objects to represent complex, hierarchical data.
- Understanding how to access these structures is essential for working with complex data.

### 1. Accessing Properties from Nested Objects

- Use dot notation (`.`) or bracket notation (`[]`).
- Chain property accessors to drill down into the nested structure.

**Example:**

```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
```

**Using Dot Notation**

```js
console.log(person.contact.phone.work);
// "098-765-4321"
```

Access properties by chaining with dots:
`person` → `contact` → `phone` → `work`

**Using Bracket Notation**

```js
console.log(person["contact"]["phone"]["work"]);
// "098-765-4321"
```

Useful when:

- Property names contain spaces or special characters.
- Using variables to access properties dynamically.

---

### 2. Accessing Arrays Inside Objects

When an object property contains an array, use:

- Bracket notation with an index to access array elements.
- Then use dot notation to access object properties inside the array.

**Example:**

```js
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
```

**Accessing Data from Arrays in Objects**

```js
console.log(person.addresses[1].city);
// "Workville"
```

**Breakdown:**

- `person.addresses` → Accesses the array.
- `[1]` → Accesses the second object in the array.
- `.city` → Accesses the `city` property of that object.

> 💡 **Important Notes**
>
> - **Nested Objects:** Chain `.` or `[]` to access deeper properties.
> - **Arrays in Objects:** Use `[index]` to access array elements.
> - Combine dot notation and bracket notation as needed.
> - Understanding nested objects and arrays is essential for working with complex data structures.

---

## Primitive vs Non-Primitive Data Types

### Primitive Data Types

Primitive data types are the simplest form of data in JavaScript.
They represent single values and are not objects.

**Primitive Types:**

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

**Characteristics:**

- Values are stored directly in the variable.
- Primitive values are **immutable** (their value cannot be changed after creation).
- You can reassign a new value to the variable.
- Assigning one primitive variable to another creates an **independent copy**.

**Example:**

```js
let num1 = 5;
let num2 = num1;

num1 = 10;

console.log(num2); // 5
```

> 💡 **Key Point:**
>
> Changes to `num1` do not affect `num2` because a copy of the value is created.

---

### Non-Primitive Data Types (Reference Types)

Non-primitive data types are objects.
They can hold multiple values as properties or elements.

**Non-Primitive Types:**

- Objects
- Arrays
- Functions

**Characteristics:**

- Variables store a **reference** (memory address) to the object, not the actual object.
- Assigning one object variable to another copies the **reference**, not the object itself.
- Multiple variables can reference the same object in memory.

**Example:**

```js
const originalPerson = {
  name: "John",
  age: 30
};

const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
```

> 💡 **Key Point:**
>
> Changes made through one reference are reflected in all references because they point to the same object in memory.
> This behavior is known as **shallow copying by reference**.

---

**Summary Table:**

| Type | Storage | Copy Behavior |
|---|---|---|
| Primitive | Stored directly in variable | Copy of the actual value |
| Non-Primitive | Stores a reference (memory address) | Copy of the reference (address) |

> 🧠 **Memory Trick:**
>
> **Primitive Types:** "JavaScript gives you a copy of the actual value."
>
> **Non-Primitive Types:** "JavaScript gives you the address of where the object lives in memory."

> 📝 **One-Line Interview Answer:**
>
> Primitive data types are stored and copied by value, whereas non-primitive data types are stored and copied by reference (memory address).

---

## Functions vs Object Methods

### Functions

Functions are reusable blocks of code that perform a specific task.
They are defined independently and are not associated with any object.

**Example:**

```js
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
// "Hello, Alice!"
```

**Key Points:**

- Called using their function name.
- Have their own scope.
- Do not have a built-in reference to any particular object.
- Used for general, reusable code.

**Invocation:**

```js
greet("Alice");
```

---

### Object Methods

Object methods are functions associated with an object.
They are defined as properties of an object.
They can access and manipulate the object's data.

**Example:**

```js
const person = {
    name: "Bob",
    age: 30,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.sayHello());
// "Hello, my name is Bob"
```

**Key Points:**

- Called using dot notation.
- Can access the object's properties using the `this` keyword.
- Are bound to their object.
- Help in organizing code into logical objects.

**Invocation:**

```js
person.sayHello();
```

---

### Role of `this`

- Inside a method, `this` refers to the object that owns the method.
- `this.name`
- Allows methods to access the object's properties and other methods.

---

**Simple Analogy 🧠**

| Concept | Analogy | Invocation |
|---|---|---|
| Function | Independent Worker 👨‍🔧 — Can perform tasks independently. Doesn't belong to anyone. | `greet("Alice");` |
| Method | Employee of a Company 🏢 — Works for a specific object. Uses the object's data to perform tasks. | `person.sayHello();` |

---

## Object() Constructor

### What is the Object() Constructor?

- A constructor is a special function used to create and initialize objects.
- It is usually invoked with the `new` keyword.

---

### Creating an Empty Object

```js
new Object();
```

> 💡 **Key Point:**
>
> `new Object()` creates and returns a new empty object.

```js
const obj = new Object();

console.log(obj); // {}
```

---

### Using `Object()` Without `new`

`Object()` can be used with or without the `new` keyword.
Its behavior depends on the type of value passed to it.

**Example:**

```js
const num = 42;
const numObj = Object(num);

console.log(numObj);
console.log(typeof numObj); // "object"
```

> 💡 **Key Point:**
>
> `Object(value)` converts primitive values like numbers, strings, and booleans into object wrappers.

---

### Passing `null` or `undefined`

```js
const newObj = new Object(undefined);

console.log(newObj); // {}
```

> 💡 **Key Point:**
>
> Passing `null` or `undefined` returns an empty object (`{}`).

---

### Working with Unknown Types

**Example:**

```js
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}
```

**How It Works:**

- If the value is `null` or `undefined` → return `{}`.
- If the value is already an object (including arrays) → return it unchanged.
- Otherwise → convert the value to an object using `Object(value)`.

**Examples:**

```js
console.log(toObject(null));      // {}
console.log(toObject(true));      // Boolean object
console.log(toObject([1, 2, 3])); // [1, 2, 3]
```

---

### When Should You Use `Object()`?

> ✅ **Recommended:**
>
> When working with values of unknown type and you need to ensure the result is an object.

> ❌ **Not Recommended:**
>
> For creating regular objects.

Instead, use object literal syntax:

```js
const objectLiteral = {
  name: "Beau"
};
```

**Quick Reference:**

| Syntax | Purpose |
|---|---|
| `{}` | Create objects |
| `Object(x)` | Convert `x` into an object |

---

