---
date: 2024-02-03
difficulty: Medium
num: 3
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 3. Longest Substring Without Repeating Characters

## Description
Same as title

## Approach / Thoughts
Use set to keep track of visited letters and sliding window, which keeps removing elements until there are no more duplicates.

## Solution
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ch_set = set()
        L, res = 0, 0

        for R in range(len(s)):
            while s[R] in ch_set:
                ch_set.remove(s[L])
                L += 1
            ch_set.add(s[R])
            res = max(res, R-L+1)
        return res
```
