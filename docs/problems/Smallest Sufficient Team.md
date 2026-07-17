---
date: 2025-12-26
difficulty: Hard
num: 1125
related_topics:
  - Array
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
return: Done
---

# Problem: 1125. Smallest Sufficient Team

## Description

## Approach / Thoughts
same, take skip tracks people

## Solution
```python
class Solution:
    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:
        skill_to_index = {}
        for i, s in enumerate(req_skills):
            skill_to_index[s] = i

        m, n = len(people), len(req_skills)

        @lru_cache(None)
        def dfs(i, seen):
            if i >= m:
                return 0 if seen == (1 << n) - 1 else (1 << m) - 1

            cur_seen = seen
            for skill in people[i]:
                idx = skill_to_index[skill]
                cur_seen |= (1 << idx)

            take = (1 << i) | dfs(i+1, cur_seen)
            skip = dfs(i+1, seen)
            return take if take.bit_count() < skip.bit_count() else skip

        people_mask = dfs(0, 0)
        return [i for i in range(m) if (1 << i) & people_mask]
```
