---
date: 2023-07-27
difficulty: Easy
num: 1342
related_topics:
  - Bit Manipulation
  - Math
return: Done
---

# Problem: 1342. Number Of Steps To Reduce A Number To Zero

## Description
This was to find the number of steps it took to reduce a num to 0. If it is even, divide by 2, else divide by 1. Find the total steps.

## Approach / Thoughts
Just did a if else conditional approach. If it is even, divide by 2 and add a count later. Otherwise, subtract one and add a count.

## Solution
```java
class Solution {
    public int numberOfSteps(int num) {
        int count = 0;

        while (num != 0){
            if (num % 2 == 0) {
                num = num / 2;
            }
            else {
                num -= 1;
            }
            count++;
        }
        return count;
    }
}
```
