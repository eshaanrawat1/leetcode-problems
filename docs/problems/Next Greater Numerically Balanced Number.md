---
date: 2025-10-23
difficulty: Medium
num: 2048
related_topics:
  - Backtracking
  - Counting
  - Enumeration
  - Hash Table
  - Math
return: Done
---

# Problem: 2048. Next Greater Numerically Balanced Number

## Description
same, 1 1 2 2s etc

## Approach / Thoughts
brute force check greater numbers

## Solution
```python
class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        
        def isb(k):
            cnt = Counter([c for c in str(k)])
            for i in range(10):
                if cnt[str(i)] == i or cnt[str(i)] == 0:
                    continue
                else:
                    return False
            return True

        while True:
            n += 1
            if isb(n):
                return n
```
