---
date: 2026-05-12
difficulty: Medium
num: 3922
related_topics:
  - 
return:
---

# Problem: 3922. Minimum Flips to Make Binary String Coherent

## Description
You are given a binary string `s`.

A string is considered **coherent** if it does **not** contain `"011"` or `"110"` as subsequences.

In one operation, you can **flip** any character in `s` (`'0'` to `'1'` or `'1'` to `'0'`).

Return an integer denoting the **minimum** number of modifications required to make `s` coherent.

## Approach / Thoughts
[[Biweekly Contest 182]]

only cases
- all 1s
- all 0s
- 1.....0...1
- one 1
## Solution
```python
class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        if n <= 2:
            return 0

        one_cnt = s.count('1')
        zero_cnt = s.count('0')

        a = max(one_cnt-1, 0)
        b = zero_cnt
        c = (s[0] == '0') + s[1:n-1].count('1') + (s[0] == '0')
        return min(a,b,c)
```