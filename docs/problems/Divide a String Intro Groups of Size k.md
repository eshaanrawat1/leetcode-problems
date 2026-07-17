---
date: 2024-01-30
difficulty: Easy
num: 2138
related_topics:
  - Simulation
  - String
return: Done
---

# Problem: 2138. Divide A String Intro Groups Of Size K

## Description
Same as problem, if uneven, fill with character fill

## Approach / Thoughts
Fill string and partition

## Solution
```python
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        if len(s) % k != 0:
            s += fill * k
        
        res = []
        curr = ""
        for i in range(len(s)):
            curr += s[i]
            if (i+1) % k == 0:
                res.append(curr)
                curr = ""
        return res
```
