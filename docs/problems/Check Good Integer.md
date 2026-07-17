---
date: 2026-06-15
difficulty: Easy
num: 3959
related_topics:
  - 
return:
---

# Problem: 3959. Check Good Integer

## Description
You are given a positive integer `n`.

Let `digitSum` be the sum of the digits of `n`, and let `squareSum` be the sum of the squares of the digits of `n`.

An integer is called **good** if `squareSum - digitSum >= 50`.

Return `true` if `n` is good. Otherwise, return `false`.

## Approach / Thoughts
[[Weekly Contest 506]]

brute force

## Solution
```python
class Solution:
    def checkGoodInteger(self, n: int) -> bool:
        dg = sum(int(c) for c in str(n))
        sq = sum(int(c)**2 for c in str(n))
        return sq - dg >= 50
```