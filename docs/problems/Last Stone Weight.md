---
date: 2024-01-22
difficulty: Easy
num: 1046
related_topics:
  - Array
  - Heap (Priority Queue)
return: Done
---

# Problem: 1046. Last Stone Weight

## Description
We have many stones and each turn we take the two heaviest stones and smash them together

- if stones have equal weight, then both are destroyed

- else, new stone has the heavier weight - lighter weight

## Approach / Thoughts
Use a max heap and pop two elements and append it to the array

Heapify at the end again

## Solution
```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        ls = [-num for num in stones]
        heapq.heapify(ls)

        while len(ls) >= 2:
            x, y = heapq.heappop(ls), heapq.heappop(ls)
            if x != y:
                heapq.heappush(ls, -(abs(x) - abs(y)))
        return -ls[0] if ls else 0
```
