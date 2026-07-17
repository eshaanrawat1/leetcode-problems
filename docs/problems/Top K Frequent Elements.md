---
date: 2024-01-20
difficulty: Medium
num: 347
related_topics:
  - Array
  - Bucket Sort
  - Counting
  - Divide and Conquer
  - Hash Table
  - Heap (Priority Queue)
  - Queue
  - Sorting
return: Done
---

# Problem: 347. Top K Frequent Elements

## Description
Find the top K frequent elements

## Approach / Thoughts
1. Use counter to find frequency and build dict

1. Make max heap from dict with tuples, but create a list of tuples so that frequency is key

1. Max heapify the list

1. Pop k times

## Solution
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        c1 = Counter(nums)
        
        hl = [(-val, key) for key, val in c1.items()]
        heapq.heapify(hl)

        res = []
        for i in range(k):
            res.append(heapq.heappop(hl)[-1])
        return res
```
