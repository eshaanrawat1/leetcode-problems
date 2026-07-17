---
date: 2024-05-27
difficulty: Medium
num: 1208
related_topics:
  - Binary Search
  - Sliding Window
  - String
return: Done
---

# Problem: 1208. Get Equal Substrings Within Budget

## Description
finding longest substring with cost

## Approach / Thoughts
sliding window

## Solution
```python
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        res = 0

        length = 0
        cur = l = 0
        for r in range(len(s)):
            cost = abs(ord(s[r]) - ord(t[r]))
            cur += cost
            length += 1

            while l <= r and cur > maxCost:
                cur -= abs(ord(s[l]) - ord(t[l]))
                l += 1
                length -= 1
            
            res = max(res, length)
        return res
```
