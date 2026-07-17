---
date: 2023-07-29
difficulty: Easy
num: 1051
related_topics:
  - Array
  - Counting Sort
  - Sorting
return: Done
---

# Problem: 1051. Height Checker

## Description
The problem was to count how many indices of an array were in an order that was not the same as a sorted version of that array.

## Approach / Thoughts
My approach was to make a copy of the original array and sort one of them. Then, a for loop would increment a counter whenever two values were not equal.

## Solution
```java
class Solution {
    public int heightChecker(int[] heights) {

        int[] ansArr = heights.clone();
        Arrays.sort(heights);
        int counter = 0;

        for (int i = 0; i < heights.length; i++) {
            if (ansArr[i] != heights[i]) {
                counter++;
            }
        }
        return counter;
    }
}
```
