---
date: 2024-04-13
difficulty: Medium
num: 397
related_topics:
  - Bit Manipulation
  - Dynamic Programming
  - Greedy
  - Memoization
return: Done
---

# Problem: 397. Integer Replacement

## Description
Replace n by n/2 if n is even, else add or subtract 1

## Approach / Thoughts
Define recurrence, then find minimum using memoization

## Solution
```python
class Solution:
    def integerReplacement(self, n: int) -> int:
        memo = {}

        def helper(num):
            if num == 1: return 0
            if num in memo: return memo[num]

            if num % 2 == 1:
                result = 1 + min(helper(num+1), helper(num-1))
            else:
                result = 1 + helper(num / 2) 

            memo[num] = result
            return result
        
        return helper(n)
```
