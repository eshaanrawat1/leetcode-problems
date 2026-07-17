---
date: 2024-08-06
difficulty: Easy
num: 3090
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 3090. Maximum Length Substring With Two Occurrences

## Description

## Approach / Thoughts
sliding window

## Solution
```python
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        freq = [0] * 26

        l = res = 0
        for r, ch in enumerate(s):
            freq[ord(ch) - ord('a')] += 1

            while freq[ord(ch) - ord('a')] > 2:
                freq[ord(s[l]) - ord('a')] -= 1
                l += 1
            
            res = max(res, r-l+1)
        return res
```
