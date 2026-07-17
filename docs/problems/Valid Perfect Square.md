---
date: 2023-08-03
difficulty: Easy
num: 367
related_topics:
  - Binary Search
  - Math
return: Done
---

# Problem: 367. Valid Perfect Square

## Description
This problem was to find if a number was a perfect square.

## Approach / Thoughts
The approach used was binary search. We start at half of the given number. Based on whether or not the square of that midpoint is less or more than the number, we either throw out the right or left half of the numbers.

If the mid squared was greater, we would set that mid to become the new high and keep doing a binary search. If the number was a square, eventually the mid squared would throw a return true.

## Solution
```java
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num == 1) {
            return true;
        }
        
        int low = 1;
        int high = num;

        while (low <= high) {
            long mid = (low + high) >>> 1;
            if (mid*mid == num) {
                return true;
            }
            else if (mid*mid > num) {
                high = (int) mid - 1;
            } 
            else {
                low = (int) mid + 1;
            }
        }
        return false;
    }
}
```
