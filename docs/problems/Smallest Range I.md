---
date: 2026-06-20
difficulty: Easy
num: 908
related_topics:
  - Array
  - Math
return:
---

# Problem: 908. Smallest Range I

## Description
You are given an integer array `nums` and an integer `k`.

In one operation, you can choose any index `i` where `0 <= i < nums.length` and change `nums[i]` to `nums[i] + x` where `x` is an integer from the range `[-k, k]`. You can apply this operation **at most once** for each index `i`.

The **score** of `nums` is the difference between the maximum and minimum elements in `nums`.

Return *the minimum **score** of *`nums`* after applying the mentioned operation at most once for each index in it*.

## Approach / Thoughts
only min and max number matters since we can make it into the range of +, -k, every other number can be grouped within

basically have a number line, and we try to tighten it as much as possible - if there is overlap, ie m1 + k is greater than m2 - k, we know we can set every element to the same element, so max 0 for no difference

## Solution
```python
class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        m1 = min(nums)
        m2 = max(nums)
        return max(0, (m2-k) - (m1+k))
```