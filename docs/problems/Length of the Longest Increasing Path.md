---
date: 2024-09-14
difficulty: Hard
num: 3288
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 3288. Length Of The Longest Increasing Path

## Description

## Approach / Thoughts
find kth point

lis of all points before and after

## Solution
```python
class Solution:
    def maxPathLength(self, coordinates: List[List[int]], k: int) -> int:

        def lis(nums):
            nums.sort(key=lambda x: (x[0], -x[1]))

            sub = []
            for x, y in nums:
                if not sub or sub[-1] < y:
                    sub.append(y)
                else:
                    idx = bisect_left(sub, y)
                    sub[idx] = y
            return len(sub) 

        kthX, kthY = coordinates[k]

        lt = [(a, b) for a, b in coordinates if a < kthX and b < kthY]
        gt = [(a, b) for a, b in coordinates if a > kthX and b > kthY]

        return lis(lt) + 1 + lis(gt)
```
