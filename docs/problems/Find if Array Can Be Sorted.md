---
date: 2024-11-05
difficulty: Medium
num: 3011
related_topics:
  - Array
  - Bit Manipulation
  - Sorting
return: Done
---

# Problem: 3011. Find If Array Can Be Sorted

## Description
swap if same number of set bits

## Approach / Thoughts
check swap for each element that is left of supposed position

## Solution
```python
class Solution:
    def canSortArray(self, nums: List[int]) -> bool:

        def set_bits(n):
            return bin(n).count('1')

        s = sorted(nums)

        for i in range(len(nums)):
            if nums[i] == s[i]:
                continue
            
            idx = bisect_right(s, nums[i])
            if idx < i:
                continue

            for j in range(i, idx):
                if set_bits(nums[i]) != set_bits(nums[j]):
                    return False
        return True
```
