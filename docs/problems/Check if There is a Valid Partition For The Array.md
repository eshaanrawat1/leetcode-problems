---
date: 2024-06-24
difficulty: Medium
num: 2369
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 2369. Check If There Is A Valid Partition For The Array

## Description
see if partition array

## Approach / Thoughts
check if we can make given partition of 2 or 3, dfs the rest and repeat

cache for memo

## Solution
```python
class Solution:
    def validPartition(self, nums: List[int]) -> bool:
        def is_valid(arr):
            A = len(arr)
            if A == 2:
                if arr[0] == arr[1]:
                    return True
            elif A == 3:
                if arr[0] == arr[1] and arr[1] == arr[2]:
                    return True
                elif arr[0] + 1 == arr[1] and arr[1] + 1 == arr[2]:
                    return True
            return False

        cache = {}
        def dfs(i):
            if i == len(nums):
                return True
            if i in cache:
                return cache[i]
            
            res1 = res2 = False
            if is_valid(nums[i:i+2]):
                res1 = dfs(i+2)
            if is_valid(nums[i:i+3]):
                res2 = dfs(i+3)

            cache[i] = True if res1 or res2 else False
            return res1 or res2

        return dfs(0)
```
