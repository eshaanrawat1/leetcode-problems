---
date: 2025-03-20
difficulty: Medium
num: 1711
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 1711. Count Good Meals

## Description
pairs which sum to power of two

## Approach / Thoughts
similar approach to two sum, find complement of a power

since only powers of two, limited in number

## Solution
```python
class Solution:
    def countPairs(self, A: List[int]) -> int:
        powers = {2**i for i in range(22)}

        cnt = 0
        seen = Counter()

        for i, n in enumerate(A):
            for p in powers:
                cnt += seen[p-n]
            seen[n] += 1
        return cnt % (10 ** 9 + 7)
```
