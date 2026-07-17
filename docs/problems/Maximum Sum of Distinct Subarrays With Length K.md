---
date: 2024-11-18
difficulty: Medium
num: 2461
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 2461. Maximum Sum Of Distinct Subarrays With Length K

## Description

## Approach / Thoughts
keep track of dupes and count

## Solution
```python
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        visit = defaultdict(int)

        total = 0
        for i in range(k):
            total += nums[i]
            visit[nums[i]] += 1

        dupes = 0
        for v in visit.values():
            if v > 1:
                dupes += 1

        l = res = 0
        if not dupes:
            res = total
        
        for r in range(k, len(nums)):
            visit[nums[l]] -= 1
            if visit[nums[l]] == 1:
                dupes -= 1

            total -= nums[l]
            total += nums[r]
            l += 1

            visit[nums[r]] += 1
            if visit[nums[r]] == 2:
                dupes += 1

            if dupes == 0:
                res = max(res, total)
        return res
```
