---
date: 2024-12-05
difficulty: Medium
num: 2554
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2554. Maximum Number Of Integers To Choose From A Range I

## Description
min sum, choose max elements not banned

## Approach / Thoughts
greedy choose smallest elements

## Solution
```python
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned = set(banned)

        res = cnt = 0
        for i in range(1, n+1):
            if i in banned:
                continue

            if res + i > maxSum:
                return cnt
            res += i
            cnt += 1
        return cnt 
```
