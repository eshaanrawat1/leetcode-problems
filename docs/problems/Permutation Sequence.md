---
date: 2026-01-01
difficulty: Hard
num: 60
related_topics:
  - Math
  - Recursion
return: Review
---

# Problem: 60. Permutation Sequence

## Description
same, kth permutation

## Approach / Thoughts
itertools

## Solution
```python
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        for i, x in enumerate(itertools.permutations(range(1,n+1))):
            if i+1 == k:
                return ''.join(str(c) for c in x)
```
