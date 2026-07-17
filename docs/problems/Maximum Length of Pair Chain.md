---
date: 2024-09-07
difficulty: Medium
num: 646
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - Sorting
return: Done
---

# Problem: 646. Maximum Length Of Pair Chain

## Description

## Approach / Thoughts
dp pick and choose

## Solution
```python
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: (x[0], x[1]))

        @cache
        def dfs(i, prev):
            if i >= len(pairs):
                return 0 

            # take if possible  
            if prev < pairs[i][0]:
                take =  1 + dfs(i + 1, pairs[i][1])
            else:
                take = 0

            # skip 
            skip = dfs(i + 1, prev)

            return max(take, skip)

        return dfs(0, -1e9)
```
