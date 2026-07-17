---
date: 2025-11-14
difficulty: Medium
num: 3741
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3741. Minimum Distance Between Three Equal Elements Ii

## Description

## Approach / Thoughts
map of element to indices → (k-i)*2

sliding window of size 3 over index window

## Solution
```python
class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        cnt = defaultdict(list)
        for i, n in enumerate(nums):
            cnt[n].append(i)

        def calc_window(inds):
            wind = deque(inds[:3])
            res = abs(wind[0] - wind[-1]) * 2

            for i in range(3, len(inds)):
                wind.popleft()
                wind.append(inds[i])
                res = min(res, abs(wind[0] - wind[-1]) * 2)
            return res

        res = inf
        for n, inds in cnt.items():
            f = inds[0]
            l = inds[-1]
            if len(inds) >= 3:
                res = min(res, calc_window(inds))
        return res if res != inf else -1
```
