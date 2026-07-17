---
date: 2024-06-11
difficulty: Medium
num: 873
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
return: Done
---

# Problem: 873. Length Of Longest Fibonacci Subsequence

## Description

## Approach / Thoughts
check every pair, walk the streak of fib

## Solution
```python
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        fibs = set(arr)

        res = 2
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                count = 2
                first, second = arr[i], arr[j]
                while (first + second) in fibs:
                    first, second = second, first + second
                    count += 1
                res = max(res, count)
        return res if res > 2 else 0
```
