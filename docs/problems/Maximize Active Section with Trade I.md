---
date: 2026-05-16
difficulty: Medium
num: 3499
related_topics:
  - String
  - Enumeration
return:
---

# Problem: 3499. Maximize Active Section with Trade I

## Description
You are given a binary string `s` of length `n`, where:

	`'1'` represents an **active** section.

	`'0'` represents an **inactive** section.

You can perform **at most one trade** to maximize the number of active sections in `s`. In a trade, you:

	Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.

	Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.

Return the **maximum** number of active sections in `s` after making the optimal trade.

**Note:** Treat `s` as if it is **augmented** with a `'1'` at both ends, forming `t = '1' + s + '1'`. The augmented `'1'`s **do not** contribute to the final count.

## Approach / Thoughts
[[Biweekly Contest 153]]

max block of adjacent 0 groups

## Solution
```python
class Solution:
    def maxActiveSectionsAfterTrade(self, s: str) -> int:
        t = s
        
        aug = 0
        if s[0] != '1':
            t = '1' + s
            aug += 1

        if s[-1] != '1':
            t += '1'
            aug += 1


        zeros = []

        cnt = 0
        for c in t:
            if c == '0':
                cnt += 1
            else:
                if cnt > 0:
                    zeros.append(cnt)
                cnt = 0

        max_pair = 0
        for i in range(len(zeros)-1):
            max_pair = max(max_pair, zeros[i] + zeros[i+1])


        one_count = t.count('1') - aug
        return max(0, one_count + max_pair)
```