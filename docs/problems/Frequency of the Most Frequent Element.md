---
date: 2024-07-13
difficulty: Medium
num: 1838
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Prefix Sum
  - Sliding Window
  - Sorting
return: Done
---

# Problem: 1838. Frequency Of The Most Frequent Element

## Description
increment elements once k times to make max freq

## Approach / Thoughts
sliding window and sort

check if we can fill in the gaps → product - sum > k

## Solution
```python
class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        
        l = cur_sum = res = 0
        for r in range(len(nums)):
            cur_sum += nums[r]

            while (r - l + 1) * nums[r] > k + cur_sum:
                cur_sum -= nums[l]
                l += 1
            
            res = max(r - l + 1, res)
        return res
```
