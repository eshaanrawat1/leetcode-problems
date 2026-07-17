---
date: 2025-03-28
difficulty: Medium
num: 2829
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 2829. Determine The Minimum Sum Of A K Avoiding Array

## Description
same, k avoiding is if i and k-i dont exist in array, get min sum

## Approach / Thoughts
use set to keep track of past seen, increment when needed

## Solution
```python
class Solution:
    def minimumSum(self, n: int, k: int) -> int:
        
        res = 0
        seen = set()

        i, cnt = 1, 0
        while cnt < n:

            while k - i in seen:
                i += 1
            
            res += i
            cnt += 1
            seen.add(i)
            i += 1   

        return res
```
