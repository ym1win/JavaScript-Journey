JavaScript can represent numbers that are beyond the maximum limit with Infinity. You'll encounter this when you try to divide a number by zero or on rare occasions, exceed the upper boundary of the Number type. Here's an example:

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number
Sometimes in JavaScript, some mathematical operations don't result in a valid number. For instance, if you try to perform a mathematical operation on something that isn't a number, you'll get NaN, which stands for "Not a Number":

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
Surprisingly, the type of NaN is also Number:


# JavaScript Type Coercion – Quick Notes

## What is Type Coercion?

**Type coercion** is JavaScript's automatic conversion of a value from one data type to another.

---

## 1. `+` Operator (Addition or Concatenation)

The `+` operator can perform:

* **Numeric addition**
* **String concatenation**

If **one operand is a string**, JavaScript converts the other operand to a string and concatenates them.

```js
5 + '10'    // "510"
'10' + 5    // "105"

typeof (5 + '10') // "string"
```

**Rule:**

> If a string is involved with `+`, JavaScript prefers **concatenation**.

---

## 2. Other Arithmetic Operators (`-`, `*`, `/`, `%`, `**`)

These operators only work with numbers. JavaScript tries to convert strings to numbers before performing the operation.

```js
'10' - 5    // 5
'10' * 2    // 20
'20' / 2    // 10

typeof ('10' - 5) // "number"
```

**Rule:**

> `-`, `*`, `/`, `%`, and `**` prefer **numeric conversion**.

---

## 3. Invalid Numeric Conversion → `NaN`

If a string cannot be converted to a number, JavaScript returns **`NaN` (Not a Number)**.

```js
'abc' - 5   // NaN
'abc' * 2   // NaN
'abc' / 2   // NaN

typeof NaN  // "number"
```

**Note:**

> `NaN` represents an invalid numeric result and its type is `"number"`.

---

## 4. Booleans in Arithmetic

JavaScript converts booleans to numbers:

* `true` → `1`
* `false` → `0`

```js
true + 1    // 2
false + 1   // 1

typeof (true + 1) // "number"
```

With `+` and strings, booleans become strings:

```js
'Hello' + true  // "Hellotrue"

typeof ('Hello' + true) // "string"
```

---

## 5. `null` and `undefined`

### `null`

JavaScript treats `null` as `0` in numeric operations.

```js
null + 5    // 5

typeof (null + 5) // "number"
```

### `undefined`

JavaScript converts `undefined` to `NaN`.

```js
undefined + 5    // NaN

typeof (undefined + 5) // "number"
```

---

## Summary Table

| Expression       | Result        | Type     |
| ---------------- | ------------- | -------- |
| `5 + '10'`       | `"510"`       | `string` |
| `'10' - 5`       | `5`           | `number` |
| `'10' * 2`       | `20`          | `number` |
| `'20' / 2`       | `10`          | `number` |
| `'abc' - 5`      | `NaN`         | `number` |
| `true + 1`       | `2`           | `number` |
| `false + 1`      | `1`           | `number` |
| `'Hello' + true` | `"Hellotrue"` | `string` |
| `null + 5`       | `5`           | `number` |
| `undefined + 5`  | `NaN`         | `number` |

---

## Easy Rules to Remember

* **`+` + String → Concatenation**
* **`-`, `*`, `/`, `%`, `**` → Convert values to Numbers**
* **`true = 1`, `false = 0`**
* **`null = 0` in arithmetic operations**
* **`undefined = NaN`**
* **`NaN` is of type `"number"`**
* Use **strict equality (`===`)** to avoid unexpected type coercion.



Number + Number → Mathematical addition
String + Anything → String concatenation
Anything + String = String concatenation
**JavaScript evaluates + from left to right
1 + 2 + '3'   // "33"
'1' + 2 + 3   // "123"
1 + '2' + 3   // "123"


# JavaScript Operator Precedence & Associativity – Quick Notes

## 1. Operator Precedence

**Operator precedence** determines **which operation is performed first** in an expression.

### Common Precedence Order:

1. `()` → Parentheses
2. `**` → Exponentiation
3. `*`, `/`, `%` → Multiplication, Division, Modulus
4. `+`, `-` → Addition, Subtraction
5. `=` → Assignment

---

## 2. Multiplication/Division Before Addition/Subtraction

```js
2 + 3 * 4   // 14
```

**Evaluation:**

```js
3 * 4 = 12
2 + 12 = 14
```

```js
2 + 6 / 3   // 4
```

**Evaluation:**

```js
6 / 3 = 2
2 + 2 = 4
```

### Rule:

> `*`, `/`, `%` are evaluated **before** `+` and `-`.

---

## 3. Parentheses Override Precedence

Use `()` to force JavaScript to evaluate expressions first.

```js
(2 + 3) * 4   // 20
```

**Evaluation:**

```js
2 + 3 = 5
5 * 4 = 20
```

### Rule:

> **Parentheses have the highest precedence.**

---

## 4. Associativity

When operators have the **same precedence**, **associativity** decides the evaluation order.

### Left-to-Right Associativity

Most arithmetic operators follow **left → right** evaluation.

```js
10 - 2 + 3   // 11
```

**Evaluation:**

```js
10 - 2 = 8
8 + 3 = 11
```

**Examples:**

* `+`
* `-`
* `*`
* `/`
* `%`

### Rule:

> Most operators are evaluated **from left to right**.

---

## 5. Right-to-Left Associativity

Some operators evaluate **from right → left**.

### Assignment Operator (`=`)

```js
let a, b;

a = b = 5;
```

**Evaluation:**

```js
b = 5
a = b
```

**Result:**

```js
a // 5
b // 5
```

### Rule:

> Assignment operators (`=`, `+=`, `-=`, etc.) are **right-to-left associative**.

---

## 6. Exponentiation Operator (`**`)

Exponentiation is also **right-to-left associative**.

```js
2 ** 3 ** 2   // 512
```

**Evaluation:**

```js
3 ** 2 = 9
2 ** 9 = 512
```

❌ Not:

```js
2 ** 3 = 8
8 ** 2 = 64
```

### Rule:

> `**` evaluates **from right to left**.

---

## Summary Table

| Precedence | Operators     | Associativity |
| ---------- | ------------- | ------------- |
| Highest    | `()`          | -             |
| High       | `**`          | Right → Left  |
| Medium     | `*`, `/`, `%` | Left → Right  |
| Low        | `+`, `-`      | Left → Right  |
| Lowest     | `=`           | Right → Left  |

---

## Key Takeaways 🚀

* **Precedence** → Which operator runs first.
* **Associativity** → Direction of evaluation when precedence is the same.
* `()` always executes first.
* `*`, `/`, `%` execute before `+`, `-`.
* Most operators evaluate **left → right**.
* `=` and `**` evaluate **right → left**.

# JavaScript Booleans & Equality Operators – Quick Notes

Summary Table
Operator	Type Coercion?	Checks	Example	Result
==	✅ Yes	Value	5 == "5"	true
===	❌ No	Value + Type	5 === "5"	false
!=	✅ Yes	Value Inequality	5 != "5"	false
!==	❌ No	Value + Type Inequality	5 !== "5"	true
Best Practice 🚀

✅ Prefer strict operators:

=== (Strict Equality)
!== (Strict Inequality)

Because they:

Avoid unexpected type coercion
Make code more predictable
Are commonly used in professional projects

# JavaScript Unary Operators – Quick Notes

Quick Memory Trick 🚀
+ → Make Number
- → Make Negative
! → Flip Boolean
~ → Flip Bits
void → Always undefined   //Common usage:

<a href="javascript:void(0)">Click Me</a>

Use: Execute code without returning a value.

typeof → Tell Type


# Bitwise Operators

&  → BOTH 1
|  → AT LEAST ONE 1
^  → DIFFERENT BITS
~  → FLIP ALL BITS
<< → left shift formula : n << k = n × 2ᵏ
>> → right shift formmula :n >> k = floor(n / 2ᵏ)

# conditional statement

The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse;
Here's an example dealing with weather temperatures in Celsius:

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);

# binary logical operators

Easy Memory Trick 🚀
&& → "ALL" must be truthy
|| → "ANY" truthy value works
?? → "NULL or UNDEFINED?" Use fallback


# JavaScript Math Object – Quick Revision Notes

Revision Cheat Sheet 📝
Math.ceil(x)    // ↑ Up
Math.floor(x)   // ↓ Down
Math.round(x)   // Nearest
Math.trunc(x)   // Remove decimals

Math.min(...)   // Smallest
Math.max(...)   // Largest

Math.sqrt(x)    // √x
Math.cbrt(x)    // ∛x

Math.abs(x)     // Positive value

Math.pow(a,b)   // a^b
Math.random()   // 0 ≤ x < 1


# JavaScript parseFloat() & parseInt() – Quick Notes

parseFloat()

Converts a string to a floating-point number (decimal number).

parseFloat("3.14")      // 3.14
parseFloat("3.14 abc")  // 3.14
parseFloat("3.14.5")    // 3.14
parseFloat("abc 3.14")  // NaN
Rules:
Starts parsing from the beginning.
Stops at the first invalid character.
Returns NaN if the string doesn't start with a number.

parseInt()

Converts a string to an integer.

parseInt("42")      // 42
parseInt("42px")    // 42
parseInt("3.14")    // 3
parseInt("abc123")  // NaN
Rules:
Starts parsing from the beginning.
Stops at the first non-digit character.
Returns only the integer part.
Returns NaN if the string doesn't start with a number.
Common Behaviors
Ignores Leading Spaces
parseFloat("  3.14") // 3.14
parseInt("  42")     // 42
Handles + and - Signs
parseFloat("+3.14") // 3.14
parseInt("-42")     // -42

The .toFixed() method rounds the number to the nearest value that can be represented with the specified number of decimal places. This rounding behavior is important to understand:

console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
As you can see, .toFixed() rounds up when the next digit is 5 or greater, and rounds down otherwise. If you call .toFixed() without arguments, it defaults to 0 decimal places:

switch statements are typically used when you're comparing a single variable against multiple possible values. They're especially useful when you have many potential conditions to check against a single variable. 

