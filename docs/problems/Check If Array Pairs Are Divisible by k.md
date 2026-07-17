---
date: 2024-10-01
difficulty: Medium
num: 1497
related_topics:
  - Array
  - Counting
  - Hash Table
return: Review
---

# Problem: 1497. Check If Array Pairs Are Divisible By K

## Description

## Approach / Thoughts
make pairs based on remainder complements

## Solution
```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        freq = [0] * k

        for n in arr:
            rem = n % k 
            if rem < 0:
                rem += k
            freq[rem] += 1

        return freq[0] % 2 == 0 and all(freq[i] == freq[k-i] for i in range(1, k // 2 + 1))
```
