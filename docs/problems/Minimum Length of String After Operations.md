---
date: 2024-07-30
difficulty: Medium
num: 3223
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 3223. Minimum Length Of String After Operations

## Description

## Approach / Thoughts
count freq, if even delete = 2, else 3

## Solution
```python
class Solution:
    def minimumLength(self, s: str) -> int:
        total = 0

        cnt = Counter(s)
        for v in cnt.values():
            if v <= 2:
                total += v
            else:
                if v % 2 == 0:
                    total += 2
                else:
                    total += 1
        return total
```
