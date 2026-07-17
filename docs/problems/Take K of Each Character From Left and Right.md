---
date: 2024-11-20
difficulty: Medium
num: 2516
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 2516. Take K Of Each Character From Left And Right

## Description
take at least k from ends

## Approach / Thoughts
keep amount in middle - max sliding window

## Solution
```python
class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        a_cnt = s.count('a')
        b_cnt = s.count('b')
        c_cnt = s.count('c')
        have_a = have_b = have_c = 0

        if min([a_cnt, b_cnt, c_cnt]) < k:
            return -1

        l = res = 0
        for r in range(len(s)):
            if s[r] == 'a': have_a += 1
            if s[r] == 'b': have_b += 1
            if s[r] == 'c': have_c += 1

            while (have_a > a_cnt - k or have_b > b_cnt - k or have_c > c_cnt - k):
                if s[l] == 'a': have_a -= 1
                if s[l] == 'b': have_b -= 1
                if s[l] == 'c': have_c -= 1
                l += 1
            res = max(res, r - l + 1)
        return len(s) - res
```
