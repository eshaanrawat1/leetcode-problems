---
date: 2025-12-23
difficulty: Hard
num: 1434
related_topics:
  - Array
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
return: Done
---

# Problem: 1434. Number Of Ways To Wear Different Hats To Each Other

## Description

## Approach / Thoughts
number of ways people can wear a hat, 2^40 tle

number of ways hats can be on a person, 2^10, seen people

invariant - dp state inversion

## Solution
```python
class Solution:
    def numberWays(self, hats: List[List[int]]) -> int:
        mod = pow(10,9)+7
        n = len(hats)

        hats_to_person = defaultdict(list)
        for i, hat in enumerate(hats):
            for h in hat:
                hats_to_person[h].append(i)

        hats_list = list(hats_to_person.keys())
        m = len(hats_list)

        @lru_cache(None)
        def dfs(i, seen, num_people):
            if num_people >= n:
                return 1
            if i >= m:
                return 0

            res = dfs(i+1, seen, num_people) % mod
            
            cur_hat = hats_list[i]
            for person in hats_to_person[cur_hat]:
                if not ((1 << person) & seen):
                    res += dfs(i+1, seen | (1 << person), num_people+1) % mod
            return res % mod

        return dfs(0, 1 << 11, 0) % mod
```
