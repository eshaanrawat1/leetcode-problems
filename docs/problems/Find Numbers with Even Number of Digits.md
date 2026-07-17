---
date: 2023-07-27
difficulty: Easy
num: 1295
related_topics:
  - Array
return: Done
---

# Problem: 1295. Find Numbers With Even Number Of Digits

## Description
Given an array with various numbers, find the number of elements with an even number of digits.

## Approach / Thoughts
I used a for loop with a nested while loop. Basically if the number was greater than 0, the while loop would keep dividing it by 10 and keep track of the number of times the number was divided. If that was even, the count would be added.

One thing to watch out for is that I had to reset the digit count, otherwise it would be incorrect.

## Solution
```java
class Solution {
    public int findNumbers(int[] nums) {

        int numcount = 0;
        for (int i = 0; i < nums.length; i++) {
            int digcount = 0;
            while (nums[i] > 0) {
                nums[i] /= 10;
                digcount++;
            }
            if (digcount % 2 == 0) {
                numcount++;
            }
        }
        return numcount;
    }
}
```
