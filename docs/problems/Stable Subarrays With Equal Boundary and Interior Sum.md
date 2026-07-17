---
date: 2025-12-18
difficulty: Medium
num: 3728
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Review
---

# Problem: 3728. Stable Subarrays With Equal Boundary And Interior Sum

## Description

## Approach / Thoughts
counter with val and prefix sum double key

missed invariant: avoid length 2 only occurs with 0 → check every possible subarray size ≤ 3 as well to see how to eliminate them

## Solution
```python
class Solution:
    def countStableSubarrays(self, capacity: List[int]) -> int:
        seen = defaultdict(Counter)
        n = len(capacity)

        ps = capacity[:]
        for i in range(1, n):
            ps[i] += ps[i-1]

        res = 0
        for i, c in enumerate(capacity):
            if i > 0:
                rem = ps[i-1]
                if rem - c in seen[c]:
                    res += seen[c][rem-c]

                if c == 0 and capacity[i-1] == 0:
                    res -= 1

            seen[c][ps[i]] += 1

        return res
```
