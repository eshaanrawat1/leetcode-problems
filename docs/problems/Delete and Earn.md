---
date: 2024-06-10
difficulty: Medium
num: 740
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
return: Review
---

# Problem: 740. Delete And Earn

## Description
find max score by taking some values

## Approach / Thoughts
house robber with conditions

## Solution
```python
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        nums = sorted(list(set(nums)))

        prev = take = 0
        for i in range(len(nums)):
            cur_amt = nums[i] * cnt[nums[i]]

            if i > 0 and nums[i] == nums[i-1] + 1:
                tmp = take
                take = max(cur_amt + prev, take)
                prev = tmp
            else:
                tmp = take
                take = cur_amt + take
                prev = tmp
        return max(take, prev)
```
