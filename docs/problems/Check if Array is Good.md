---
date: 2026-05-13
difficulty: Easy
num: 2784
related_topics:
  - Array
  - Hash Table
  - Sorting
return:
---

# Problem: 2784. Check if Array is Good

## Description
You are given an integer array `nums`. We consider an array **good **if it is a permutation of an array `base[n]`.

`base[n] = [1, 2, ..., n - 1, n, n]`(in other words, it is an array of length `n + 1` which contains `1` to `n - 1`exactly once, plus two occurrences of `n`). For example, `base[1] = [1, 1]` and`base[3] = [1, 2, 3, 3]`.

Return `true` *if the given array is good, otherwise return** *`false`.

**Note: **A permutation of integers represents an arrangement of these numbers.

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        n = len(nums)
        return sorted(nums) == list(range(1,n)) + [n-1]
```