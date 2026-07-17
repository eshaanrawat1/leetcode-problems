---
date: 2024-06-13
difficulty: Hard
num: 768
related_topics:
  - Array
  - Greedy
  - Monotonic Stack
  - Sorting
  - Stack
return: Review
---

# Problem: 768. Max Chunks To Make Sorted Ii

## Description
make chunks of sorted array

## Approach / Thoughts
monotonic stack, keep track of array bounds

## Solution
```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = []
        for n in arr:
            largest = n
            while stack and n < stack[-1]:
                largest = max(largest, stack.pop())
            stack.append(largest)
        return len(stack)
```
