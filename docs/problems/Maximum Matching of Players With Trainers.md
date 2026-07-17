---
date: 2025-07-12
difficulty: Medium
num: 2410
related_topics:
  - Array
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2410. Maximum Matching Of Players With Trainers

## Description
same as 445

## Approach / Thoughts
sort and check greedy

## Solution
```python
class Solution:
    def matchPlayersAndTrainers(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()

        g = deque(g)
        s = deque(s)

        res = 0
        while g and s:
            if s[0] >= g[0]:
                res += 1
                s.popleft()
                g.popleft()
            else:
                s.popleft()
        return res
```
