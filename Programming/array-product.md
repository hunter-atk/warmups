Suppose you are given an array of integers. Find the largest product of any pair of integers in the array. Some examples:

  console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
  console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200

# Problem Solving

1: Understand the problem
 - In/Out
    - Array [2,5,-10, 20] => 100
    - Array [2,-5,-10, 20] => 50
    - Array [0,5,-10, -20] => 200
  - Restate the problem
    - Given an array of integers, return the highest possible product that can be produced by any two of these integers
  - Clarifying questions?
    - Does 'largest' mean largest distance from 0 or largest positive integer?
    - Are any age values invalid? Like a negative number, for example?
    - Can you use an element in the array more than once? Can you multiply an element by itself?

2: Devise a strategy
  - Sort elements in the array in ascending order
  - [-100, -5, 0, 2, 9, 10]
  - find product of first two integers and last two ingegers
  - return whichever one is greater

3: Implement the solution
   largestProduct (array) => {
     1. sort array
     2. find product of first two elements
     3. find product of last two elements
     4. if first product is greater than second product, return first product, else return second product
   }

4: Look Back
 - Analyzing the solution
 - Less Naive solution ?
  - Optimizations?
 - Refactoring
  - SRP
  - SOLID