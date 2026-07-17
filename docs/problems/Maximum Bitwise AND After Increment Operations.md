---
date: 2026-01-17
difficulty: Hard
num: 3806
related_topics:
  - Array
  - Bit Manipulation
  - Greedy
  - Sorting
return: Review
---

# Problem: 3806. Maximum Bitwise And After Increment Operations

## Description

## Approach / Thoughts
the idea is that we can only inc numbers. we also want to track bit by bit whether this is a feasible solution. if bit x is more significant than bit y, we always take bit x

the cost of each number is

- if it already has the mask set, we’re good no cost

otherwise, there is a missing number. we need to do the following

- find the highest bit position that is missing (set to 0)

- make a mask that is all 1s

- subtract current mask & tmp mask and n & tmp mask

- the reason for using tmp mask is this basically tracks minimum number of changes to reach this part onwards (since the rest of the mask is already full)

- ie subtracting “sections” needed to get to the missing portion

then take m best greedy, see if we can and update global mask

## Solution
```python
class Solution:
    def maximumAND(self, nums: List[int], k: int, m: int) -> int:
        mask = 0
        for b in range(32, -1, -1):
            cand = mask | (1 << b)

            cost = []
            for n in nums:
                if (n & cand) == cand:
                    cost.append(0)
                else:
                    high_missing = (cand & ~n).bit_length()
                    tmp_mask = (1 << high_missing) - 1
                    diff = (cand & tmp_mask) - (n & tmp_mask)
                    cost.append(diff)

            cost.sort()
            cur_sum = sum(cost[:m])
            if cur_sum <= k:
                mask = cand 
        return mask 
```
