---
date: 2024-10-25
difficulty: Medium
num: 1010
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 1010. Pairs Of Songs With Total Durations Divisible By 60

## Description
pairs sum to 60 divide

## Approach / Thoughts
modulo remainders and count

## Solution
```python
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        rems = defaultdict(int)
        total = 0

        for t in time:
            total += rems[t % 60]
            rems[(60 - t % 60) % 60] += 1
        return total
```
