---
date: 2024-08-18
difficulty: Easy
num: 3258
related_topics:
  - Sliding Window
  - String
return: Done
---

# Problem: 3258. Count Substrings That Satisfy K Constraint I

## Description
same, num of 1s and 0s

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        cnt = 0
        for i in range(len(s)):
            for j in range(i, len(s)):
                sub = s[i:j+1]
                if sub.count('0') <= k or sub.count('1') <= k:
                    cnt += 1
        return cnt
```
