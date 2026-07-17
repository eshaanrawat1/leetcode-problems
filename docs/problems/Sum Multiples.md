---
date: 2023-08-05
difficulty: Easy
num: 2652
related_topics:
  - Array
  - Math
  - Number Theory
return: Done
---

# Problem: 2652. Sum Multiples

## Description
Add all nums from 1 to n divisible by 3,5, or 7.

## Approach / Thoughts
Loop from 1 to n and use conditionals

## Solution
```java
class Solution {
    public int sumOfMultiples(int n) {
        int ans = 0;
        for (int i = 0; i <= n; i++) {
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                ans+= i;
            }
        }
        return ans;
    }
}
```
