---
date: 2026-01-07
difficulty: Hard
num: 3273
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 3273. Minimum Amount Of Damage Dealt To Bob

## Description

## Approach / Thoughts
pairwise compares di*tj < dj*ti → expand formula

## Solution
```python
class Solution:
    def minDamage(self, power: int, damage: List[int], health: List[int]) -> int:
        # di   dj
        # ti   tj

        # i before j -> di*ti + (di+dj)*tj = di*ti + di*tj + dj*tj
        # j before j -> dj*tj + (di+dj)*ti = dj*tj + di*ti + dj*ti
        # = 
        # i before j -> di*ti + (di+dj)*tj = di*tj
        # j before j -> dj*tj + (di+dj)*ti = dj*ti
        # di*tj ? dj*ti
        # bigger number means put after

        def cmp_damage(A, B):
            di, hi = A
            dj, hj = B

            ti = ceil(hi / power)
            tj = ceil(hj / power)

            return -1 if (di*tj >= dj*ti) else 1

        pairs = [(d, h) for d, h in zip(damage, health)]
        pairs.sort(key = cmp_to_key(cmp_damage))

        res = [0]
        for d, h in pairs:
            ttk = ceil(h / power)
            res.append(res[-1] + ttk)

        total = 0
        for i, (d, h) in enumerate(pairs):
            total += (res[i+1] * d)
        return total
```
