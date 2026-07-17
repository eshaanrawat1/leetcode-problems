---
date: 2026-05-28
difficulty: Easy
num: 3940
related_topics:
  - 
return:
---

# Problem: 3940. Limit Occurrences in Sorted Array

## Description
You are given a **sorted** integer array `nums` and an integer `k`.

Return an array such that each **distinct** element appears **at most** `k` times, while preserving the relative order of the elements in `nums`.

Note: If a distinct element appears **at least** `k` times, then it must appear **exactly** `k` times in the resulting array.

## Approach / Thoughts
[[Weekly Contest 503]]

count brute force

## Solution
```python
class Solution:
    def limitOccurrences(self, nums: list[int], k: int) -> list[int]:
        cnt = Counter(nums)
        res = []

        for x in sorted(cnt.keys()):
            res.extend([x for _ in range(min(k, cnt[x]))])
        return res
```