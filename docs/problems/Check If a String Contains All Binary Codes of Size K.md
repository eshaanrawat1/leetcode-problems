---
date: 2025-01-21
difficulty: Medium
num: 1461
related_topics:
  - Bit Manipulation
  - Hash Function
  - Hash Table
  - Rolling Hash
  - String
return: Done
---

# Problem: 1461. Check If A String Contains All Binary Codes Of Size K

## Description

## Approach / Thoughts
all substrings, length of set is equal to 2^k

## Solution
```python
class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        n = len(s)
        seen = {s[:k]}

        for i in range(1, n-k+1):
            seen.add(s[i:i+k])
        return len(seen) == 2**k
```
