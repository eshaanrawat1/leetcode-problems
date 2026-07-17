---
date: 2024-11-01
difficulty: Hard
num: 3336
related_topics:
  - Array
  - Dynamic Programming
  - Math
  - Number Theory
return: Done
---

# Problem: 3336. Find The Number Of Subsequences With Equal Gcd

## Description
same - disjoint subseq

## Approach / Thoughts
3d dp, include in one and include in other, skip in both

## Solution
```python
class Solution:
    def subsequencePairCount(self, nums: List[int]) -> int:
        
        @cache
        def dfs(i, f, s):
            if i >= len(nums):
                return (f and s) and (f == s)

            skip = dfs(i + 1, f, s)

            takef = dfs(i + 1, gcd(f, nums[i]), s)
            takes = dfs(i + 1, f, gcd(s, nums[i]))

            return skip + takef + takes

        return dfs(0, 0, 0) % (10 ** 9 + 7) 
```
