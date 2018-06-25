
You are given an array of grades.  You need to process this array, and return an array that describes whether each grade
was higher, lower or even to the previous grade.

So given the following array:

```javascript
[6,3,5,4,3,4,4,5]
```

Your code would produce:

```javascript
["down","up","down","down","up","even","up"]
```

When given an empty array, it returns an empty array.

NOTE: your array tracks the differences between grades, so it will be one item _shorter_ than the given array.

# Problem Solving

1: Understand the problem
 - In/Out
    - Array [6,3,5,4,3,4,4,5] -> Array ["down","up","down","down","up","even","up"]
    - Array [3,5,9,2,2] -> Array ["up","up","down","even"]
    - Array [2] -> Array []
    - Array [] -> Array []
  - Restate the problem:
    - Each element in the output array corresponds to the relationship between two elements in the input array.

2: Devise a strategy
  - for each element in the input array (starting at Index 1 because there's no number to compare the element at Index 0 to!), check to see its relationship to the previous element in the array. Identify that relationship and push it to your output array.
  - could also use map or forEach, but this would likely require using temporary variables. I think a for loop is most appropriate here.

3: Implement the solution
  - Write sandwhich code:
  - function arrayDifferences (input) {
    - if (length of input < 2) {
        return [];
      }
    - declare output array []
    - for each element in input (starting at index 1 and until we get to the last element) {
          if (previous element is > current element){
            push "down" to output array
          }
          else if (previous element is < current element){
              push "up" to output array
          }
          else push "even" to output array
      }
    - return output array
    }

4: Look Back
 - Analyzing the solution
 - Less Naive solution ?
  - Optimizations?
 - Refactoring
  - SRP
  - SOLID
