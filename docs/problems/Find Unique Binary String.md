---
date: 2024-09-10
difficulty: Medium
num: 1980
related_topics:
  - Array
  - Backtracking
  - Hash Table
  - String
return: Done
---

# Problem: 1980. Find Unique Binary String

## Description

## Approach / Thoughts
dfs

## Solution
```python
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:  
        nums = set(nums)

        def dfs(i, cur):
            if i >= len(nums):
                return cur if cur not in nums else None

            return dfs(i + 1, cur + '0') or dfs(i + 1, cur + '1')
        return dfs(0, '')
```
