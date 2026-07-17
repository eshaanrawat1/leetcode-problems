---
date: 2024-12-14
difficulty: Medium
num: 2374
related_topics:
  - Array
  - Counting
  - Graph
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
return: Done
---

# Problem: 2374. Node With Highest Edge Score

## Description

## Approach / Thoughts
count and sum

## Solution
```python
class Solution:
    def edgeScore(self, edges: List[int]) -> int:
        score = Counter()
        for s, d in enumerate(edges):
            score[d] += s

        node = val = -inf
        for k, v in score.items():
            if v > val:
                node = k
                val = v
            if v == val:
                node = min(node, k)
        return node
```
