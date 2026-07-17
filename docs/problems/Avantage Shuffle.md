---
date: 2024-08-01
difficulty: Medium
num: 870
related_topics:
  - Array
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 870. Avantage Shuffle

## Description
match nums and idx

## Approach / Thoughts
match big to small, use q

if too big, fill with small, else fill with big

## Solution
```python
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        q = deque(nums1)

        pairs = [(v,i) for i,v in enumerate(nums2)]
        pairs.sort(reverse=True)

        res = [0] * len(nums1)
        for i in range(len(pairs)):
            val, idx = pairs[i]
            if q[-1] > val:
                res[idx] = q.pop()
            else:
                res[idx] = q.popleft()
        return res
```
