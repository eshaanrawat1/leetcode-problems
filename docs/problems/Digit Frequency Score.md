---
date: 2026-06-02
difficulty: Easy
num: 3945
related_topics:
  - 
return:
---

# Problem: 3945. Digit Frequency Score

## Description
You are given an integer `n`.

The **score** of `n` is defined as the **sum** of `d * freq(d)` over all **distinct** digits `d`, where `freq(d)` denotes the number of times the digit `d` appears in `n`.

Return an integer denoting the score of `n`.

## Approach / Thoughts
[[Weekly Contest 504]]

simple

## Solution
```python
class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        cnt = Counter(str(n))

        res = 0
        for k, v in cnt.items():
            res += int(k) * v
        return res
```