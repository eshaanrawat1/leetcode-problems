---
date: 2025-01-01
difficulty: Medium
num: 2559
related_topics:
  - Array
  - Prefix Sum
  - String
return: Done
---

# Problem: 2559. Count Vowel Strings In Ranges

## Description
same, range count of words start and end vowel

## Approach / Thoughts
prefix sum

## Solution
```python
class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        vowels = 'aeiou'

        ps = []
        for w in words:
            if w[0] in vowels and w[-1] in vowels:
                ps.append(1)
            else:
                ps.append(0)

        for i in range(1, len(ps)):
            ps[i] += ps[i-1]

        res = []
        for a, b in queries:
            if a != 0:
                res.append(ps[b] - ps[a-1])
            else:
                res.append(ps[b])
        return res
```
