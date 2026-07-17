---
date: 2026-06-27
difficulty: Medium
num: 1846
related_topics:
  - Array
  - Greedy
  - Sorting
return:
---

# Problem: 1846. Maximum Element After Decreasing and Rearranging

## Description
You are given an array of positive integers `arr`. Perform some operations (possibly none) on `arr` so that it satisfies these conditions:

	- The value of the **first** element in `arr` must be `1`.

	- The absolute difference between any 2 adjacent elements must be **less than or equal to **`1`. In other words, `abs(arr[i] - arr[i - 1]) <= 1` for each `i` where `1 <= i < arr.length` (**0-indexed**). `abs(x)` is the absolute value of `x`.

There are 2 types of operations that you can perform any number of times:

	- **Decrease** the value of any element of `arr` to a **smaller positive integer**.

	- **Rearrange** the elements of `arr` to be in any order.

Return *the **maximum** possible value of an element in *`arr`* after performing the operations to satisfy the conditions*.

## Approach / Thoughts
sort the array - optimally each element is +1 of previous element. however, can only decrease, so best it can be is +1 of prev or itself if it is == to prev

## Solution
```python
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()

        n = len(arr)
        arr[0] = 1

        for i in range(1, n):
            arr[i] = min(arr[i-1]+1, arr[i])
        return arr[-1]
```