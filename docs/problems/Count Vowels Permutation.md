---
date: 2024-09-05
difficulty: Hard
num: 1220
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 1220. Count Vowels Permutation

## Description

## Approach / Thoughts
find width of tree from bottom up

which vowels lead to next vowels

## Solution
```python
class Solution:
    def countVowelPermutation(self, n: int) -> int:
        a = e = i = o = u = 1
        for _ in range(n - 1):
            a, e, i, o, u = e + i + u, a + i, e + o, i, i + o
        return (a + e + i + o + u) % (10 ** 9 + 7)
```
