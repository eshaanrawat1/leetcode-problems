---
date: 2024-11-17
difficulty: Easy
num: 1652
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 1652. Defuse The Bomb

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        res = [0] * len(code)
        if k == 0:
            return res

        n = len(code)
        if k > 0:
            for i in range(len(code)):
                for j in range(i+1, i+1+k):
                    res[i] += code[j%n]
        
        if k < 0:
            for i in range(len(code)):
                for j in range(i+k, i):
                    res[i] += code[j]
        
        return res
```
