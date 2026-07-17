---
date: 2024-01-13
difficulty: Medium
num: 2186
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 2186. Minimum Number Of Steps To Make Two Strings Anagram Ii

## Description
Two strings s and t, return number of appends needed to make them anagrams each other.

## Approach / Thoughts
Use a frequency counter, find the number of appends needed to add missing letters to t

Use same counter to find missing letters needed for s, add both.

## Solution
```python
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        ops = 0
        freq_s, freq_t = [0] * 26, [0] * 26

        for ch in s:
            freq_s[ord(ch) - ord('a')] += 1
        for ch in t:
            freq_t[ord(ch) - ord('a')] += 1

        for i in range(26):
            if freq_s[i] > freq_t[i]:
                ops += freq_s[i] - freq_t[i]
            if freq_t[i] > freq_s[i]:
                ops += freq_t[i] - freq_s[i]
        return ops
```
