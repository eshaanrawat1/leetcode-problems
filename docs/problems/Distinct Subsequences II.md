---
date: 2024-09-06
difficulty: Hard
num: 940
related_topics:
  - Dynamic Programming
  - String
return: Review
---

# Problem: 940. Distinct Subsequences Ii

## Description

## Approach / Thoughts
dp count num of subseq that end at character

if duplicate, replace in place

## Solution
```python
class Solution:
    def distinctSubseqII(self, s: str) -> int:        
        ends = [0] * 26
        for c in s:
            ends[ord(c) - ord('a')] = sum(ends) + 1
        return sum(ends) % (10 ** 9 + 7)
```
