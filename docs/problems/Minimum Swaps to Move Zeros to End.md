---
date: 2026-06-03
difficulty: Easy
num: 3936
related_topics:
  - 
return:
---

# Problem: 3936. Minimum Swaps to Move Zeros to End

## Description
You are given an integer array `nums`.

In one operation, you can choose any two **distinct** indices `i` and `j` and swap `nums[i]` and `nums[j]`.

Return an integer denoting the **minimum** number of operations required to move all 0s to the end of the array.

## Approach / Thoughts
[[Biweekly Contest 183]]

check swaps, all end positions must be filled

## Solution
```python
class Solution:
    def minimumSwaps(self, nums: list[int]) -> int:
        c = nums.count(0)

        n = len(nums)
        i = n - 1

        res = k = 0
        while i >= 0:
            if k == c:
                break
            res += (nums[i] != 0)
            k += 1
            i -= 1
        return res
```