---
date: 2026-02-03
difficulty: Hard
num: 3298
related_topics:
  - Hash Table
  - Senior Staff
  - Sliding Window
  - String
return: Done
---

# Problem: 3298. Count Substrings That Can Be Rearranged To Contain A String Ii

## Description

## Approach / Thoughts
sliding window on invalid strings → ie counter doesnt match

subtract that from total num of substrings

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
