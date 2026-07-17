---
date: 2026-02-11
difficulty: Medium
num: 3713
related_topics:
  - Counting
  - Enumeration
  - Hash Table
  - Senior
  - String
return: Done
---

# Problem: 3713. Longest Balanced Substring I

## Description
same, all distinct character count is equal

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def longestBalanced(self, s: str) -> int:
        res = 0

        n = len(s)
        for i in range(n):
            cnt = Counter()
            for j in range(i, n):
                cnt[s[j]] += 1

                if len(set(cnt.values())) == 1:
                    res = max(res, j-i+1)
        return res
```
