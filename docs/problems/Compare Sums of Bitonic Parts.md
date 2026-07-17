---
date: 2026-04-27
difficulty: Medium
num: 3909
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given a **bitonic** array `nums` of length `n`.

Split the array into **two** parts:

- **Ascending part**: from index 0 to the peak element (inclusive).
- **Descending part**: from the peak element to index `n - 1` (inclusive).

The peak element belongs to both parts.

Return:

- 0 if the sum of the **ascending** part is greater.
- 1 if the sum of the **descending** part is greater.
- -1 if both sums are **equal**.

**Notes**:

- A **bitonic** array is an array that is **strictly increasing** up to a **single peak** element and then **strictly decreasing**.
- An array is said to be **strictly increasing** if each element is **strictly greater** than its **previous** one (if exists).
- An array is said to be **strictly decreasing** if each element is **strictly smaller** than its **previous** one (if exists).

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 181]]

find peak and check left right sums

## Solution
```python
class Solution:
    def compareBitonicSums(self, nums: list[int]) -> int:
        # 1:57
        
        idx = 0
        N = len(nums)

        for i, n in enumerate(nums):
            if i > 0 and i < N-1:
                if nums[i-1] < n and n > nums[i+1]:
                    idx = i
                    break

        l = sum(nums[:idx+1])
        r = sum(nums[idx:])

        if l == r:
            return -1
        return 0 if l > r else 1