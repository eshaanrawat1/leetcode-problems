---
date: 2026-06-08
difficulty: Hard
num: 798
related_topics:
  - Array
  - Prefix Sum
return: Review
---

# Problem: 798. Smallest Rotation with Highest Score

## Description
You are given an array `nums`. You can rotate it by a non-negative integer `k` so that the array becomes `[nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]`. Afterward, any entries that are less than or equal to their index are worth one point.

	- For example, if we have `nums = [2,4,1,3,0]`, and we rotate by `k = 2`, it becomes `[1,3,0,2,4]`. This is worth `3` points because `1 > 0` [no points], `3 > 1` [no points], `0 <= 2` [one point], `2 <= 3` [one point], `4 <= 4` [one point].

Return *the rotation index *`k`* that corresponds to the highest score we can achieve if we rotated *`nums`* by it*. If there are multiple answers, return the smallest such index `k`.

## Approach / Thoughts
atrociously tedious problem for the naive version

easy 
- intuition for intervals and prefix sum
- treat each start and end for number of rotations, find max - meeting rooms style

hard
- bounds with wrap around
- handling the interval which is valid since with wrap around there might be something in between which means we have 2 valid intervals and 1 bad one - so handle that separately

other intuition - any rotation automatically adds 1 point, we just have to figure out when a rotation starts us to lose a point - this is where prefix sum comes into play

## Solution
```python
class Solution:
    def bestRotation(self, nums: List[int]) -> int:      
        n = len(nums)
        ps = [0] * (n+1)   

        for i, v in enumerate(nums):
            if v > i:
                l = i + 1
                r = (i + n - v) % n

                ps[l] += 1
                ps[r+1] -= 1
            else:
                l = 0
                r = i - v

                ps[l] += 1
                if r+1 < n: 
                    ps[r+1] -= 1    
                if i+1 < n:
                    ps[i+1] += 1
            
        best_k = max_cnt = cur = 0
        for i, v in enumerate(ps):
            cur += v
            if cur > max_cnt:
                best_k = i
                max_cnt = cur
        return best_k
        
        
class Solution:
    def bestRotation(self, nums: List[int]) -> int:      
        n = len(nums)
        ps = [1] * n 

        for i, v in enumerate(nums):
            lose = (i + n) - (v - 1)
            ps[lose % n] -= 1

        for i in range(1, n):
            ps[i] += ps[i-1]
        
        return ps.index(max(ps))

```