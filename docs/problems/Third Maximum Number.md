---
date: 2024-01-26
difficulty: Easy
num: 414
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 414. Third Maximum Number

## Description
Find third biggest distinct number

## Approach / Thoughts
Make set and handle edge cases

heapify set list pop twice and return first index

## Solution
```python
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        heap_list = list(set(nums))
        if len(heap_list) < 3:
            return max(heap_list)
        
        hl = [-n for n in heap_list]
        heapq.heapify(hl)
        for i in range(2):
            heapq.heappop(hl)
        return -1*hl[0]
```
