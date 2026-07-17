---
date: 2025-11-13
difficulty: Medium
num: 2654
related_topics:
  - Array
  - Math
  - Number Theory
return: Done
---

# Problem: 2654. Minimum Number Of Operations To Make All Array Elements Equal To 1

## Description
same, replace x,y adjacent with gcd

## Approach / Thoughts
extend interval and see if group can make gcd

special count for 1s

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        N = len(nums)
        res = inf
        ones_count = nums.count(1)

        for i in range(N):
            x = nums[i]
            for j in range(i+1, N):
                y = nums[j]

                if nums[i] == 1 or nums[j] == 1:
                    return N-ones_count

                x = gcd(x, y)
                if x == 1:
                    res = min(res, j-i+N-1)

        return res if res != inf else -1
```
