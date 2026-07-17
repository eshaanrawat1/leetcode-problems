---
date: 2025-10-24
difficulty: Medium
num: 3346
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Sliding Window
  - Sorting
return: Review
---

# Problem: 3346. Maximum Frequency Of An Element After Performing Operations I

## Description

## Approach / Thoughts
binary search on possible candidates

each candidate in the loop is a potential candidate, use binary search to find how far left and right we can go (ie can we make this number into our candidate by adding or subtracting at most k)

we only have num operations, so either we can convert the whole window, or num operations + count of candidate, since we don’t need to waste an operation if a num == candidate

## Solution
```python
class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int) -> int:
        nums.sort()
        cnt = Counter(nums)

        res = 1
        for i in range(nums[0], nums[-1]+1):
            l = bisect_left(nums, i-k)
            r = bisect_right(nums, i+k)-1
            res = max(res, min(r-l+1, numOperations+cnt[i]))
        return res
```
