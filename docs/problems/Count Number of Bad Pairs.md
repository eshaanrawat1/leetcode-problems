---
date: 2025-02-08
difficulty: Medium
num: 2364
related_topics:
  - Array
  - Counting
  - Hash Table
  - Math
return: Review
---

# Problem: 2364. Count Number Of Bad Pairs

## Description
pair where nums[j] - nums[i] = j - i

## Approach / Thoughts
rearrange formula map

## Solution
```python
class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        cnt = Counter()
        res = 0
        for i, n in enumerate(nums):
            res += i - cnt[i-n]
            cnt[i-n] += 1
        return res
```
