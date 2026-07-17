---
date: 2024-01-13
difficulty: Medium
num: 1347
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 1347. Minimum Number Of Steps To Make Two Strings Anagram

## Description
Same as problem title.

## Approach / Thoughts
1. Make a frequency counter of the letters in s and t

1. Find all the deficiencies in one string, this works because since equal length, they must be balanced out

1. Add absolute difference for one string and return

## Solution
```python
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        freq_s, freq_t = [0] * 26, [0] * 26
        for i in range(len(s)):
            freq_s[ord(s[i]) - ord('a')] += 1
            freq_t[ord(t[i]) - ord('a')] += 1
        
        ops = 0
        for i in range(26):
            if freq_s[i] > freq_t[i]:
                ops += freq_s[i] - freq_t[i]
        return ops
```
