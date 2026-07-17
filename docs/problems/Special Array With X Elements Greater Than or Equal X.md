---
date: 2024-05-26
difficulty: Easy
num: 1608
related_topics:
  - Array
  - Binary Search
  - Sorting
return: Done
---

# Problem: 1608. Special Array With X Elements Greater Than Or Equal X

## Description
find x such that x elements are ≥ x

## Approach / Thoughts
brute force 2 loops

binary search

counting sort, subtract frequencies

## Solution
```python
class Solution:
    def specialArray(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        cur_sum = len(nums)

        for i in range(len(nums)+1):
            if cur_sum == i:
                return i
            cur_sum -= cnt[i]
        return -1
```
