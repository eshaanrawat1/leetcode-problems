---
date: 2024-06-02
difficulty: Medium
num: 2486
related_topics:
  - Greedy
  - String
  - Two-Pointer
return: Done
---

# Problem: 2486. Append Characters To String To Make Subsequence

## Description
make t subseq of s by adding characters to s

## Approach / Thoughts
find common subseq, add everything after

## Solution
```python
class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        top, bot = 0, 0

        while top < len(s) and bot < len(t):
            if s[top] == t[bot]:
                top += 1
                bot += 1
            else:
                top += 1
        
        return len(t) - bot
```
