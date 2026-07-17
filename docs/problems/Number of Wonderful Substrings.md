---
date: 2024-04-30
difficulty: Medium
num: 1915
related_topics:
  - Bit Manipulation
  - Hash Table
  - Prefix Sum
  - String
return: Review
---

# Problem: 1915. Number Of Wonderful Substrings

## Description
some bit manipulation stuff

## Approach / Thoughts
review

## Solution
```python
class Solution:
    def wonderfulSubstrings(self, word: str) -> int:
        cnt, res, mask = [1] + [0] * 1023, 0, 0
        for ch in word:
            mask ^= 1 << (ord(ch) - ord('a'))
            res += cnt[mask]
            for n in range(10):
                res += cnt[mask ^ 1 << n]
            cnt[mask] += 1
        return res
```
