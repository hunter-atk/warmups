Given two arrays of Numbers, return an array containing elements common to both arrays, for example:

```
  var test1 = [1,2,3,4,5];
  var test2 = [3,4,7,8,9];

  console.log(intersection(test1, test2)); // [3,4]

  var test3 = [];
  console.log(intersection(test1, test3)); // []
  console.log(intersection(test2, test3)); // []
```

# Problem Solving

1: Understand the problem
 - In/Out
    - Array1 [1,2,3,4,5], Array2 [3,4,7,8,9] -> Array [3,4]
    - Array1 [3], Array2 [1] -> Array []
  - Restate the problem
    - Given two arrays, return an array which only contains unique elememts which appear in both given arrays.
  - Clarifying questions?
    - Duplicate elements in output array?

2: Devise a strategy
  - Concatenate both arrays. Then loop through the array and add each element to an object in the form of a key (the element itself) and set its value to the number of times it appears. If the count for any of these keys exceeds 1, push this key to your output array.
  - Another option is to use nested loops to check if each individual element in one array corresponds to an element in the other array. This isn't nearly as efficient as the first option, however. 
  - You could also concatenate and sort the arrays, loop through the new array, and as you loop through, determine which elements appear more than once (you'd have to use temporary variables and if/else statements). Again, this isn't as efficient as the first option.

3: Implement the solution
  - Write sandwhich code
  - function commonElements(arr1, arr2){
      let result = [];
      arr1.concat(arr2).
      return result;
    }

4: Look Back
 - Analyzing the solution
 - Less Naive solution ?
  - Optimizations?
 - Refactoring
  - SRP
  - SOLID
