---
date: 2025-03-20
difficulty: Medium
num: 1090
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1090. Largest Values From Labels

## Description
maximize values, but can only take each label some amount of times

## Approach / Thoughts
frequency hashmap to not exceed limit - take values greedy

## Solution
```python
class Solution:
    def largestValsFromLabels(self, values: List[int], labels: List[int], numWanted: int, useLimit: int) -> int:
        pairs = [(v, l) for v,l in zip(values, labels)]
        pairs.sort(key = lambda x: -x[0])

        cnt = res = 0
        freq = Counter()

        for v, l in pairs:
            if freq[l] < useLimit:
                freq[l] += 1
                res += v
                cnt += 1

            if cnt == numWanted:
                break

        return res
```
