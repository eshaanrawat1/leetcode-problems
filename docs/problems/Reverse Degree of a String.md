---
date: 2026-05-16
difficulty: Easy
num: 3498
related_topics:
  - String
  - Simulation
return:
---

# Problem: 3498. Reverse Degree of a String

## Description
Given a string `s`, calculate its **reverse degree**.

The **reverse degree** is calculated as follows:

	For each character, multiply its position in the *reversed* alphabet (`'a'` = 26, `'b'` = 25, ..., `'z'` = 1) with its position in the string **(1-indexed)**.

	Sum these products for all characters in the string.

Return the **reverse degree** of `s`.

## Approach / Thoughts
[[Biweekly Contest 153]]

parse

## Solution
```python
class Solution:
    def reverseDegree(self, s: str) -> int:

        alpha = 'abcdefghijklmnopqrstuvwxyz'
        j = 0

        deg = {}
        for i in range(26, 0, -1):
            deg[alpha[j]] = i
            j += 1

        return sum(deg[c]*(i+1) for i,c in enumerate(s))
```