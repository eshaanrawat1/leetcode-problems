---
date: 2025-05-15
difficulty: Medium
num: 1818
related_topics:
  - Array
  - Binary Search
  - Ordered Set
  - Sorting
return: Done
---

# Problem: 1818. Minimum Absolute Sum Difference

## Description
replace 1 element in nums1 with another element in nums1 to minimize absolute sum difference of each element

## Approach / Thoughts
binary search

## Solution
```python
class Solution:
    def minAbsoluteSumDiff(self, nums1: List[int], nums2: List[int]) -> int:
        possible = sorted(nums1)
        n = len(nums1)

        def get_vals(idx, b):
            x = idx - 1 if idx > 0 else 0
            y = idx if idx < n else 0
            z = idx + 1 if idx < n - 1 else 0

            cur_mins = [(abs(possible[k] - b), possible[k]) for k in [x, y, z]]
            cur_mins.sort()

            return cur_mins[0][1]

            
        diff = sum(abs(a-b) for a,b in zip(nums1, nums2))
        res = diff

        for a, b in zip(nums1, nums2):
            cur_diff = abs(a - b)
            if cur_diff == 0:
                continue

            idx = bisect.bisect_left(possible, b)
            cur_min = get_vals(idx, b)
            new_diff = abs(cur_min - b)

            res = min(res, diff - cur_diff + new_diff)
        return res % (10 ** 9 + 7)
```
