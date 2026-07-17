---
date: 2025-06-29
difficulty: Easy
num: 594
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sliding Window
  - Sorting
return: Done
---

# Problem: 594. Longest Harmonious Subsequence

## Description
subsequence where max and min diff is 1 exactly

## Approach / Thoughts
check if adjacent elements are in the list

## Solution
```python
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        cnt = Counter(nums)

        res = 0
        for n in nums:
            prev = cnt[n-1]
            nxt = cnt[n+1]

            if prev == 0 and nxt == 0:
                continue

            res = max(res, cnt[n] + prev, cnt[n] + nxt)
        return res
```
