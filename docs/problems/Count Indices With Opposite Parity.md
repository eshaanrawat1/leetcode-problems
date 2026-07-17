---
date: 2026-05-03
difficulty: Medium
num: 3917
related_topics:
  - Array
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n`.

The **score** of an index `i` is defined as the number of indices `j` such that:

- `i < j < n`, and
- `nums[i]` and `nums[j]` have different parity (one is even and the other is odd).

Return an integer array `answer` of length `n`, where `answer[i]` is the score of index `i`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 500]]

brute force

## Solution
```python
class Solution:
    def countOppositeParity(self, nums: list[int]) -> list[int]:
        n = len(nums)

        ans = [0] * n
        
        for i in range(n):
            for j in range(i+1, n):
                p1 = nums[i] % 2
                p2 = nums[j] % 2
                ans[i] += p1 ^ p2
        return ans