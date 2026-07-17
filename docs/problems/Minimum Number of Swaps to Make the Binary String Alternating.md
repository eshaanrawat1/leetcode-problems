---
date: 2025-05-18
difficulty: Medium
num: 1864
related_topics:
  - Greedy
  - String
return: Done
---

# Problem: 1864. Minimum Number Of Swaps To Make The Binary String Alternating

## Description

## Approach / Thoughts
start at 0 or 1 if valid, choose min

## Solution
```python
class Solution:
    def minSwaps(self, s: str) -> int:
        cnt = Counter(s)
        if cnt['0'] > cnt['1'] + 1 or cnt['1'] > cnt['0'] + 1:
            return -1

        def start(k):
            cur, swaps = k, 0

            for c in s:
                if str(cur) != c:
                    swaps += 1
                cur = (1 - cur)
            return ceil(swaps / 2)

        if cnt['0'] > cnt['1']:
            return start(0)
        if cnt['1'] > cnt['0']:
            return start(1)

        return min(start(0), start(1))
```
