---
date: 2025-01-17
difficulty: Medium
num: 2683
related_topics:
  - Array
  - Bit Manipulation
return: Done
---

# Problem: 2683. Neighboring Bitwise Xor

## Description

## Approach / Thoughts
reconstruct array

## Solution
```python
class Solution:
    def doesValidArrayExist(self, derived: List[int]) -> bool:
        n = len(derived)

        def start(a):
            res = [a]

            for i, d in enumerate(derived):
                if i == n - 1:
                    break

                if d == 1:
                    val = 0 if res[-1] else 1
                    res.append(val)
                else:
                    res.append(res[-1])
            
            b = derived[-1]
            return res[0] ^ res[-1] == b

        return start(1) or start(0)
```
