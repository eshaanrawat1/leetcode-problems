---
date: 2026-02-03
difficulty: Medium
num: 3297
related_topics:
  - Hash Table
  - Sliding Window
  - Staff
  - String
return: Done
---

# Problem: 3297. Count Substrings That Can Be Rearranged To Contain A String I

## Description
same as 3298 - weaker constraints

## Approach / Thoughts
same as 3298

## Solution
```python
class Solution:
    def validSubstringCount(self, word1: str, word2: str) -> int:
        m = len(word1)

        need = Counter(word2)
        target = len(need)

        have_cnt = Counter()
        have = l = res = 0

        for r, v in enumerate(word1):
            have_cnt[v] += 1
            if have_cnt[v] == need[v]:
                have += 1

            while have == target:
                lv = word1[l]
                have_cnt[lv] -= 1
                if have_cnt[lv] < need[lv]:
                    have -= 1
                l += 1

            res += r-l+1
        return (m * (m+1) // 2) - res
```
