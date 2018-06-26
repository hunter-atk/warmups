Implement each of these functions.

```
var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

removeBadPeople(people);
// => [{name:'A', age: 20}, {name:'B', age: 30}];

sumAgesValid(people);
// => 50

sumAgesAll(people);
// => 60
```

# Problem Solving

1: Understand the problem
 - In/Out
    - Array [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}]
        - removeBadPeople(people) => [{name:'A', age: 20}, {name:'B', age: 30}]
        - sumAgesValid(people) => 50
        - sumAgesAll(people) => 60
  - Restate the problem
    - Given an array of objects, each containing a name (String) and an age (Number) of a person, write a function removeBadPeople() to remove people with invalid names or ages; a function sumAgesValid() to sum the ages of all valid people; and sumAgesAll() to sum the ages of all people, regardless of whether they are valid.
  - Clarifying questions?
    - What makes a name invalid?
    - Are any age values invalid? Like a negative number, for example?
    - In sumAgesValid(), are you summing the ages of all valid people, or summing all valid ages regardless of wether their name is valid?

2: Devise a strategy
  - removeBadPeople()
    - Iterate through the array of objects and check the value of each name and age to check if it's valid. If valid, push object to new array.
  - sumAgesValid()
    - Run removeBadPeople(), then just loop throug the ages and sum them up in a new variable. Return this variable.
  - sumAgesAll()
    - Just sum all the ages in all your objects in the original array

3: Implement the solution
   - removeBadPeople()
      - In: Array of Objects
        - 1. [ { name: 'Andy', age: 22}, { name: 'Betty', age: -23} ]
        - 2. [ { name: 'Andy', age: 22}, {} } ]
        - 3. [ { name: 'Andy', age: 22}, { name: '', age: 23} ]
      - Out: 
        - 1.  [ { name: 'Andy', age: 22} ]
        - 2.  [ { name: 'Andy', age: 22} ]
        - 3.  [ { name: 'Andy', age: 22} ]
    - sumAgesValid()
      - In: Array of Objects
        - 1. [ { name: 'Andy', age: 22}, { name: 'Betty', age: -23} ]
        - 2. [ { name: 'Andy', age: 22}, {} ]
        - 3. [ { name: 'Andy', age: 22}, { name: '', age: 23} ]
      - Out: 
        - 1. 22
        - 2. 22
        - 3. 22
    - sumAgesAll()
      - In: Array of Objects
        - 1. [ { name: 'Andy', age: 22}, { name: 'Betty', age: -23} ]
        - 2. [ { name: 'Andy', age: 22}, {} } ]
        - 3. [ { name: 'Andy', age: 22}, { name: '', age: 23} ]
      - Out: 
        - 1. -1
        - 2. 22
        - 3. 45

4: Look Back
 - Analyzing the solution
 - Less Naive solution ?
  - Optimizations?
 - Refactoring
  - SRP
  - SOLID
