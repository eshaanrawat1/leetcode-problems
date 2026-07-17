---
date: 2024-09-02
difficulty: Easy
num: 1945
related_topics:
  - Simulation
  - String
return: Done
---

# Problem: 1945. Sum Of Digits Of String After Convert

## Description

## Approach / Thoughts
follow steps k times

## Solution
```python
class Solution:
    def getLucky(self, s: str, k: int) -> int:
        digits = ''.join([str(ord(ch) - ord('a') + 1) for ch in s])
        
        while k:
            num = sum(int(i) for i in digits)
            digits = str(num)

            k -= 1
        return int(digits)
```
