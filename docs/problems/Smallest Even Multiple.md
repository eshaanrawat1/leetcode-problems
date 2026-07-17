---
date: 2023-08-27
difficulty: Easy
num: 2413
related_topics:
  - Math
  - Number Theory
return: Done
---

# Problem: 2413. Smallest Even Multiple

## Description
Find the smallest even multiple of a number which could be itself.

## Approach / Thoughts
At first it was using a conditional. If the number is even, just return it, otherwise return two times the number. On another approach, we could return n * a mod operation. If it is even, it should return n * (0 + 1), else n * (1 + 1) which is in line.

## Solution
```java
class Solution {
    public int smallestEvenMultiple(int n) {
        
        return n * (n % 2 + 1);
    }
}
```
