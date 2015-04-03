# Front-End Masters Workshop Series
## JavaScript: Fundamentals to Functional JavaScript

Bianca Gandolfo
@BiancaGando
JavaScript Envagelist, Hack Reactor

slides: bit.ly/js102-slides1
exercises: bit.ly/js102-exercises

Who is this course for?
- Completed a JS tutorial (Codecademy, CodeSchool, Kahn Academy, Bloc.io)
- 2-6 months JavaScript experience
- want solid fundamentals
- looking for practice
- interested in getting into Hack Reactor

Two part course:
- review and solidify core JS and principles with a project
- get started on functional methods
- grow as a JS engineer

Objects {}:
- a data structure in which we store data
- store properties, functions, sting, Array, Numbers
- key/value pairs
- blueprint of a class (something that has properties)

Objects Overview:
- property access
- bracket notation
- dot notation
- dot notation vs bracket
- nested objects
- object literals
- iteration

Whatever is to the left of a dot is an object (syntax rules of dot notation or bracket notation apply)

```javascript
// store an empty object in literal form
var box = {};

// assignments with dot notation
box.material = "cardboard";

// access with dot notation
box.material;

// store by value
var cb = box.material;
cb;
box.material = "titanium";
cb;
```

Objects, Arrays, and Functions are stored by reference.

Access & Assignment
- undefined is its own type
- occurs if you do a property look up on something that does not exist on the object

Bracket Notation

```javascript
var box = {};
box["material"] = "cardboard";
var cb = box["material"];
```

Variables
Difference between new Object(); and {}; is a constructor and object literal notation.

```javascript
var box = {};
box["material"] = "cardboard";
var key = "material";
box[key];
```

Expressions
Bracket notation evaluates expressions

```javascript
var b = {};
b["material"] = "cardboard";
var f = function() {
  return "material";
};

b[f()];
```

Dot notation is limited and not as flexible as bracket notation when using it for property names.

Brackets
- strings
- weird characters
- variables
- numbers
- expressions

Storing data using Objects, etc.

```javascript
var a = {};
a["material"] = "cardboard";
a["size"] = {
  "height": 2,
  "width": 80
};

a.area = function() {
  return a.size.height * a.size.height;
};
```

Iteration
No guaranteed order of objects

```javascript
var browsers = {
IE: 'Internet Explorer',
Mozilla: 'Firefox',
Google: 'Chrome',
0: 'No browser found.'
};

for (var type in browsers) {
  console.log(browsers[type]);
}
```

Solve Exercises

Arrays vs. Objects
- data structure used for ordering items
- zero indexed
- Objects that have string properties don't have inherent order
- Array is an Object and thus share the same rules
- how are they different?

Overview
- Arrays vs Objects
- Access && Assignment
- Native Methods && Properties
- Iteration

Use Arrays if it doesn't make sense to have named properties or if you need elements to be ordered.

Access & Assignment
