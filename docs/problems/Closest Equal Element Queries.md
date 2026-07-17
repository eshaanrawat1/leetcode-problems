---
date: 2025-03-16
difficulty: Medium
num: 3488
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3488. Closest Equal Element Queries

## Description
same, closest dupe element to each index

## Approach / Thoughts
dicts to track adjacent, account for circular by appending array

## Solution
```python
class Solution:
    def solveQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        tmp = nums + nums
        n = len(nums)

        tmp_set = set(nums)

        dist = {i:inf for i in range(2*n)}
        seen = Counter()
        freq = Counter(nums)

        for i, x in enumerate(tmp):
            if x in seen:
                old_idx = seen[x] 
                dist[i] = i - old_idx
                dist[old_idx] = min(dist[old_idx], abs(i-old_idx))
            seen[x] = i

        res = []
        for q in queries:
            if freq[nums[q]] <= 1:
                res.append(-1)
            else:
                res.append(min(dist[q], dist[q+n]))
        return res
```
