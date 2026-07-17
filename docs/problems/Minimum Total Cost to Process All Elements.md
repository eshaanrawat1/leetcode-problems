---
date: "2026-07-12"
difficulty: "Medium"
rating: 1400
num: "3987"
related_topics:
  - "greedy"
  - "arithmetic-sequence"
  - "order-irrelevant"
return:
---

# Problem: 3987. Minimum Total Cost to Process All Elements

## Approach / Thoughts

[[Weekly Contest 510]]

cost doesn't need to be applied incrementally since nums is fixed - just precompute how much we need to get through nums in one pass -> that's the cost

## Solution

```python
class Solution:
    def minimumCost(self, nums: list[int], k: int) -> int:
        mod = 10**9+7
        n = len(nums)

        need = sum(nums)
        ops = ceil((need - k) / k)

        return( ops * (ops+1) // 2) % mod
```
