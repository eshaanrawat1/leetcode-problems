---
date: 2025-01-09
difficulty: Medium
num: 2024
related_topics:
  - Binary Search
  - Prefix Sum
  - Sliding Window
  - String
return: Done
---

# Problem: 2024. Maximize The Confusion Of An Exam

## Description
same, max consecutive T or F after flipping k

## Approach / Thoughts
max length of window, sliding condition is when we have too many to flip

## Solution
```python
class Solution:
    def maxConsecutiveAnswers(self, nums: str, k: int) -> int:
        l = res = 0
        freq = Counter()

        for r, n in enumerate(nums):
            freq[n] += 1

            if (r - l + 1) - max(freq.values()) > k:
                freq[nums[l]] -= 1
                l += 1

            res = max(res, r - l + 1)

        return res
```
