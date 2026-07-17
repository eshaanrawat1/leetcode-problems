---
date: 2024-09-14
difficulty: Medium
num: 1371
related_topics:
  - Bit Manipulation
  - Hash Table
  - Prefix Sum
  - String
return: Review
---

# Problem: 1371. Find The Longest Substring Containing Vowels In Even Counts

## Description

## Approach / Thoughts
bitmask + prefix sum

## Solution
```python
class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        vowels = 'aeiou'
        seen = {0: -1}

        res = mask = 0
        for i, c in enumerate(s):
            if c in vowels:
                mask ^= (ord(c) - ord('a') + 1)

            if mask in seen:
                res = max(res, i - seen[mask])
            else:
                seen[mask] = i
        return res
```
