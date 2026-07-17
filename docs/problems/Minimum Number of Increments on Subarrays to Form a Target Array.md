---
date: 2026-05-18
difficulty: Hard
num: 1526
related_topics:
  - Array
  - Dynamic Programming
  - Stack
  - Greedy
  - Monotonic Stack
return:
---

# Problem: 1526. Minimum Number of Increments on Subarrays to Form a Target Array

## Description
You are given an integer array `target`. You have an integer array `initial` of the same size as `target` with all elements initially zeros.

In one operation you can choose **any** subarray from `initial` and increment each value by one.

Return *the minimum number of operations to form a *`target`* array from *`initial`.

The test cases are generated so that the answer fits in a 32-bit integer.

## Approach / Thoughts
make a visualization of bricks
each operation corresponds to laying a row of bricks out - sum up the edges
this handles gaps naturally
![[Pasted image 20260518134316.png]]

## Solution
```python
class Solution:
    def minNumberOperations(self, target: List[int]) -> int:
        n = len(target)

        res = [target[0]]
        for i in range(1, n):
            res.append(max(0, target[i] - target[i-1]))
        return sum(res)
```