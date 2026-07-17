---
date: 2025-03-31
difficulty: Hard
num: 2551
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2551. Put Marbles In Bags

## Description
same, score is index i + j vals, bag is everything in between

## Approach / Thoughts
consider all split points and add the value gained from split

greedily take best and worst splits

## Solution
```python
class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:
        n = len(weights)
        if k == 1 or k == n:
            return 0

        max_pairs = []
        min_pairs = []

        for i in range(n-1):
            val = weights[i] + weights[i+1]

            max_pairs.append(-val)
            min_pairs.append(val)

        heapq.heapify(max_pairs)
        heapq.heapify(min_pairs)

        max_score = min_score = (weights[0] + weights[-1])

        for _ in range(k-1):
            max_val = -heapq.heappop(max_pairs)
            min_val = heapq.heappop(min_pairs)

            max_score += max_val
            min_score += min_val

        return max_score - min_score
```
