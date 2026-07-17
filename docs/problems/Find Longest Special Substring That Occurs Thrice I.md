---
date: 2024-12-09
difficulty: Medium
num: 2981
related_topics:
  - Binary Search
  - Counting
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 2981. Find Longest Special Substring That Occurs Thrice I

## Description

## Approach / Thoughts
binary search on lengths + sliding window

## Solution
```python
class Solution:
    def maximumLength(self, s: str) -> int:
        
        def find(l):
            cnt = defaultdict(int)
            for i in range(len(s)-l+1):
                cnt[s[i:i+l]] += 1

            for c in 'abcdefghijklmnopqrstuvwxyz':
                if cnt[c * l] >= 3:
                    return True

            return False

        l, r = 1, len(s)
        res = -1
        
        while l <= r:
            m = (l + r) // 2
            if find(m):
                l = m + 1
                res = m
            else:
                r = m - 1
        return res
```
