---
date: 2024-05-26
difficulty: Medium
num: 274
related_topics:
  - Array
  - Counting Sort
  - Sorting
return: Done
---

# Problem: 274. H Index

## Description
h index

## Approach / Thoughts
count sort and prefix sum

## Solution
```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        cnt = Counter(citations)
        cur_papers = len(citations)

        cur_max = -1
        for i in range(len(citations)+1):
            if cur_papers >= i:
                cur_max = max(i, cur_max)
            cur_papers -= cnt[i]
        return cur_max
```
