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


# Dynamic Typing

JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable when you declare it. Instead, the type is determined based on the value assigned to the variable while the program is running. This allows you to change the type of a variable throughout the program.

Let's look at an example:

Example Code
let example = "Hello";
example = 42;

In this example, we have a variable called example with the data type of string. But then we update value to be a number instead.

typeof Operator

The typeof operator in JavaScript is a simple yet powerful tool that lets you see the data type of a variable or value. It always returns a string indicating the type.

However, there's a well-known quirk in JavaScript when it comes to null.

Let's take a look at an example:

let exampleVariable = null;
console.log(typeof exampleVariable); // "object"

In this example, we have a variable called exampleVariable and have assigned it the value of null. But when we use the typeof operator, it returns the string object.

This is widely considered a bug in JavaScript, dating back to its early days. The reason for this behavior is rooted in the way JavaScript was originally designed.

When the language was first implemented, values like null were represented as a special type of object, leading to this unexpected result.

Unfortunately, this has become a part of the language, and while it's confusing, it's something you'll need to be aware of.


# Newline Character (`\n`)

If you want to break a string into multiple lines, you would use `\n` where you want the new line to begin:

```javascript
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

The `\n` escape sequence tells JavaScript to insert a line break at that point, which results in the string being displayed across multiple lines.

---

# Escaping Quotes in Strings

You can escape the inner quotes by placing a backslash (`\`) before them:

```javascript
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

The backslash tells JavaScript to treat the quotes as literal characters, so they appear correctly in the output.

---

# Template Literals and String Interpolation

## What Are Template Literals, and What Is String Interpolation?

In JavaScript, template literals are a powerful and flexible way to work with strings. Unlike regular strings, which use single (`'`) or double (`"`) quotes, template literals are defined with backticks (`` ` ``).

They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.

Template literals make it easier to create strings that span multiple lines or include expressions (like variables or even JavaScript code) directly within the string.

Here's an example of a template literal:

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);
```

Notice the use of backticks instead of single or double quotes. The `${name}` syntax is an example of string interpolation, where the value of the variable `name` is directly inserted into the string.

---

## String Interpolation

String interpolation allows you to embed variables and expressions inside a string. This is a significant improvement over the older method, where you would concatenate strings and variables using the `+` operator.

Here is an example using string concatenation and the plus (`+`) operator:

```javascript
const name = "Alice";
const age = 25;

const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
```

And here is an example using template literals and string interpolation:

```javascript
const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

As you can see, string interpolation with template literals is much cleaner and easier to read, especially when you're working with multiple variables.

---

## Multiline Strings Using Template Literals

Another great feature of template literals is that they support multiline strings.

With regular strings, you would need to use escape characters (`\n`) to create new lines.

With template literals, you can simply write the string across multiple lines, and the formatting is preserved:

```javascript
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);
```

---

## Expressions Inside Template Literals

Another feature of template literals is that they allow you to embed JavaScript expressions directly within the string, like in this example:

```javascript
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;

const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;

console.log(output);
```

Template literals are particularly useful when you need to include variables or expressions in strings, format complex strings, or work with multiline text. They are more concise and readable compared to traditional string concatenation.

# `indexOf()` Method

To locate the position of a substring inside of a string, you can use the `indexOf()` method. The `indexOf()` method in JavaScript allows you to search for a substring within a string.

If the substring is found, `indexOf()` returns the index (or position) of the first occurrence of that substring. If the substring is not found, `indexOf()` returns `-1`, which indicates that the search was unsuccessful.

The `indexOf()` method takes two arguments:

* The first is the substring you want to find within the larger string.
* The second is an optional starting position for the search.

If you don’t provide a starting position, the search will begin at the start of the string.

> **Note:** `indexOf()` method is case sensitive.

---

# `prompt()` Method

What exactly does the `prompt()` method do?

It opens a dialog box that asks the user for some input, and then it returns the text entered by the user as a string.

The `prompt()` method takes two arguments:

* The first one is the message which will appear inside the dialog box, typically prompting the user to enter information.
* The second one is a default value which is optional and will fill the input field initially.

```javascript id="73sxza"
prompt(message, default);
```

Keep in mind that the `prompt()` method will halt the execution of the script until the user interacts with the dialog box.

This means the rest of your JavaScript code won’t run until the user either provides input and clicks **"OK"**, or cancels the prompt.

---

# `charCodeAt()` and `fromCharCode()` Methods

While `charCodeAt()` helps you retrieve the numeric code of a character, the `fromCharCode()` method allows you to do the opposite: convert a UTF-16 code unit (which matches ASCII for basic characters) into its corresponding character.

Let's see this in action:

```javascript id="vsx2vn"
let char = String.fromCharCode(65);
console.log(char);  // A
```

---

# `includes()` Method

The `includes()` method is used to check if a string contains a specific substring.

If the substring is found within the string, the method returns `true`, otherwise, it returns `false`.

It's important to note that the `includes()` method is case-sensitive. This means that the exact match of the characters is required, including their case.

---

# `slice()` Method

The `slice()` method allows you to extract a portion of a string and returns a new string, without modifying the original string.

It takes two parameters:

* The starting index
* The optional ending index

Here's the basic syntax:

```javascript id="c6b6bl"
string.slice(startIndex, endIndex);
```

* `startIndex` is the position where the extraction starts.
* `endIndex` is where the extraction ends.
* If not provided, `slice()` extracts until the end of the string.

> **Note:** end index waala character excluded hota hai!

---

## Negative Indexing

You can also use negative numbers as indexes. When you use a negative number, it counts backward from the end of the string:

```javascript id="wbh9mz"
let message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!
```

In this case, `slice(-4)` extracts the last four characters from the string, giving us `fun!`.

> **Note:** negative indexing `'1'` se start hoti hai, `'0'` se nhi!

---

## Extracting a Section from the Middle

Let's say you want to extract a section from the middle of a string. You can provide both the starting and ending indexes to precisely control which part of the string you want:

```javascript id="mjyv33"
let message = "I love JavaScript!";
let language = message.slice(7, 17);

console.log(language);  // JavaScript
```

Here, `slice(7, 17)` extracts the substring starting at index `7` and ending right before index `17`, which is the word `JavaScript`.

The `slice()` method is a powerful tool for extracting parts of a string in JavaScript.

You specify the start and end indexes, and the method returns a new string that contains the extracted portion.

---

# `toUpperCase()` and `toLowerCase()` Methods

In summary, the `toUpperCase()` and `toLowerCase()` methods in JavaScript are powerful tools for transforming strings into all uppercase or lowercase letters.

---

# `trim()`, `trimStart()`, and `trimEnd()` Methods

In summary, trimming whitespace is an essential part of working with strings in JavaScript.

Whether you want to clean up input data or ensure consistent string comparisons, you can use:

* `trim()` to remove whitespace from both sides of a string.
* `trimStart()` to remove whitespace from the beginning of a string.
* `trimEnd()` to remove whitespace from the end of a string.

---

# `replace()` Method

You might need to update user information in a URL, change the formatting of dates, or correct errors in user-generated content.

The `replace()` method in JavaScript allows you to find a specified value (like a word or character) in a string and replace it with another value.

The method returns a new string with the replacement and leaves the original unchanged because JavaScript strings are immutable.

## Syntax

```javascript id="3y5a6e"
string.replace(searchValue, newValue);
```

* `searchValue` is the value you want to search for in the string.

* It can be either a string or a regular expression (regex), which describes patterns in text.

* This allows you to search for and manipulate strings in a flexible and powerful way.

* You'll learn more about regular expressions in future lessons.

* `newValue` is the value that will replace the `searchValue`.

### Example

```javascript id="5lx6zc"
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"

let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"
```

In this example, the word `JavaScript` is found within the string and is replaced with `coding`.

---

## Case Sensitivity

The `replace()` method is case-sensitive, meaning that it will only find exact matches of the `searchValue`.

For example:

```javascript id="gup6n8"
let sentence = "I enjoy working with JavaScript.";
console.log(sentence);

let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);
```

Here, since `javascript` (with lowercase `j`) does not match `JavaScript` (with uppercase `J`), the replacement is not made.

---

## First Occurrence Only

By default, the `replace()` method will only replace the first occurrence of the `searchValue`.

If the value appears multiple times in the string, only the first one will be replaced:

```javascript id="tkt9nf"
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);

let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);
```

Notice that only the first occurrence of `world` is replaced with `universe`.

---

# `repeat()` Method

If you pass `0` as the count, the `repeat()` method will return an empty string.

```javascript id="jxxgcr"
let word = "Test";
console.log(word.repeat(0));  // ""
```

The `repeat()` method can simplify tasks that involve string duplication, making your code more concise and readable.

Whether you're generating repeated text patterns or filling a space with characters, `repeat()` can save you from writing loops or more complex code.

You are not limited to passing a number directly into the `repeat()` method. You can also pass a variable that stores a number value.

```javascript id="mhvulr"
let count = 4;
let word = "Test";

let repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest
```

In this example, the `count` variable stores the number of repetitions. This can be useful when the number of repetitions depends on user input or other dynamic values in your program.

