---
date: 2024-02-01
difficulty: Medium
num: 1291
related_topics:
  - Enumeration
return: Done
---

# Problem: 1291. Sequential Digits

## Description
Find all digits where each digit after is one more

## Approach / Thoughts
Initially recursion similar to a backtracking approach, then neetcode solution where you use a queue for processing all values.

## Solution
```python
class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        res = []
        def dfs(i):
            if low <= i <= high:
                res.append(i)
            if i > high:
                return 

            if i%10 != 9:
                s = str(i) + str(i%10+1)
                dfs(int(s))
            
        for i in range(1, 10):
            dfs(i)
        res.sort()
        return res
```
