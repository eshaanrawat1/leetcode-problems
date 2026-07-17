---
date: 2026-05-06
difficulty: Easy
num: 2389
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Sorting
  - Prefix Sum
return:
---

# Problem: 2389. Longest Subsequence With Limited Sum

## Description
You are given an integer array `nums` of length `n`, and an integer array `queries` of length `m`.

Return *an array *`answer`* of length *`m`* where *`answer[i]`* is the **maximum** size of a **subsequence** that you can take from *`nums`* such that the **sum** of its elements is less than or equal to *`queries[i]`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

## Approach / Thoughts
[[Weekly Contest 308]]

sort and find break point
## Solution
```python
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]):
        nums.sort()

        res = []
        for q in queries:
            sz = cur = 0
            for x in nums:
                cur += x
                if cur > q:
                    break
                sz += 1
            res.append(sz)
        return res
```