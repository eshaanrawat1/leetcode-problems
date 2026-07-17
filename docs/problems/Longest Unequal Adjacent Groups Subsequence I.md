---
date: 2025-05-14
difficulty: Easy
num: 2900
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - String
return: Done
---

# Problem: 2900. Longest Unequal Adjacent Groups Subsequence I

## Description
same, longest alternating subsequence

## Approach / Thoughts
greedy alternate either start at 0 or 1

## Solution
```python
class Solution:
    def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        n = len(words)

        def start(k):
            res = []
            cur = k

            for w, g in zip(words, groups):
                if g == cur:
                    res.append(w)
                    cur = (1 - cur)
            return res

        a = start(0)
        b = start(1)

        return a if len(a) >= len(b) else b
```
