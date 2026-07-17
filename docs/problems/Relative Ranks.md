---
date: 2024-05-07
difficulty: Easy
num: 506
related_topics:
  - Array
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 506. Relative Ranks

## Description
ranks

## Approach / Thoughts
sort and index and do checks

## Solution
```python
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        res = [0] * len(score)

        d = {}
        for i, v in enumerate(score):
            d[v] = i
        
        score.sort()
        j = 1
        for i in range(len(score)-1,-1,-1):
            s = score[i]
            res[d[s]] = j
            j += 1

        for i in range(len(res)):
            if res[i] == 1: res[i] = "Gold Medal"
            elif res[i] == 2: res[i] = "Silver Medal"
            elif res[i] == 3: res[i] = "Bronze Medal"
            else: res[i] = str(res[i])
        
        return res
```
