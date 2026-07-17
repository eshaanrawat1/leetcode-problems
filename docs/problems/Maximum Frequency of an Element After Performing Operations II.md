---
date: 2026-04-23
difficulty: Hard
num: 3347
related_topics:
  - Array
  - Binary Search
  - Sliding Window
  - Sorting
  - Prefix Sum
return: Review
---

# Problem:  

## Description
You are given an integer array `nums` and two integers `k` and `numOperations`.

You must perform an **operation** `numOperations` times on `nums`, where in each operation you:

- Select an index `i` that was **not** selected in any previous operations.
- Add an integer in the range `[-k, k]` to `nums[i]`.

Return the **maximum** possible frequency of any element in `nums` after performing the **operations**.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
interval type similar to meeting rooms 2
need to track max number of operations with count and numOperations

## Solution
```python
class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int):
        pre = Counter()
        cnt = Counter()

        for n in nums:
            cnt[n] += 1
            pre[n-k] += 1
            pre[n+k+1] -= 1

        res = total = 0
        for key in sorted(cnt.keys() | pre.keys()):
            total += pre[key]

            chg = total - cnt[key]
            allowed = min(chg, numOperations)
            res = max(res, cnt[key] + allowed)
        return res