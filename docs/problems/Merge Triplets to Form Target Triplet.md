---
date: 2025-04-03
difficulty: Medium
num: 1899
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 1899. Merge Triplets To Form Target Triplet

## Description
same, take max of triplets

## Approach / Thoughts
start with any small valid triplet

take if possible, else skip

## Solution
```python
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        n = len(triplets)
        triplets.sort()

        cur = None
        for a, b, c in triplets:
            if a <= target[0] and b <= target[1] and c <= target[2]:
                cur = [a, b, c]
                break

        if cur is None:
            return False

        if cur == target:
            return True

        for i in range(1, n):
            a, b, c = triplets[i]
            if a > target[0] or b > target[1] or c > target[2]:
                continue
            
            cur[0] = max(cur[0], a)
            cur[1] = max(cur[1], b)
            cur[2] = max(cur[2], c)

            if cur == target:
                return True

        return False
```
