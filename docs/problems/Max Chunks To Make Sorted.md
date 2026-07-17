---
date: 2024-12-19
difficulty: Medium
num: 769
related_topics:
  - Array
  - Greedy
  - Monotonic Stack
  - Sorting
  - Stack
return: Done
---

# Problem: 769. Max Chunks To Make Sorted

## Description
same, elements between 0,n-1 find chunks

## Approach / Thoughts
recursive brute force

## Solution
```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        A = len(arr)

        def max_reach(nums, target):
            idx = None
            for k, n in enumerate(nums):
                if n < target:
                    idx = k
            return idx

        
        def dfs(i, reach):
            if i >= A:
                return 0

            mi = max_reach(arr[i:], arr[i])
            mi = i + mi if mi else None
            if not mi:
                if not reach or i > reach:
                    return 1 + dfs(i + 1, None)
                elif i == reach:
                    return 1 + dfs(i + 1, None)
                return dfs(i + 1, reach)
                
            res = inf
            for j in range(i+1, mi+1):
                res = min(res, dfs(j, mi))
            return res
        return dfs(0, None)    
```
