---
date: 2025-03-26
difficulty: Medium
num: 3147
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 3147. Making Maximum Energy From The Mystic Dungeon

## Description
same, take energy and move to i+k

## Approach / Thoughts
walk and cache every streak

## Solution
```python
class Solution:
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        n = len(energy)

        @cache
        def dfs(i):
            if i >= n:
                return 0

            return energy[i] + dfs(i + k)

        return max(dfs(i) for i in range(n))
```
