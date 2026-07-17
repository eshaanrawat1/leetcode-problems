---
date: 2024-10-16
difficulty: Medium
num: 670
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 670. Maximum Swap

## Description
max swap to make biggest number

## Approach / Thoughts
brute force all swaps

find earliest, max number candidate swap

## Solution
```python
class Solution:
    def maximumSwap(self, num: int) -> int:
        ls = list(str(num))
        for i in range(len(ls)):
            cand, cand_idx = ls[i], i

            for j in range(i+1, len(ls)):
                if cand_idx == i and ls[j] > cand:
                    cand = ls[j]
                    cand_idx = j
                elif cand_idx != i and ls[j] >= cand:
                    cand = ls[j]
                    cand_idx = j

            if cand_idx != i:
                ls[i], ls[cand_idx] = ls[cand_idx], ls[i]
                return int(''.join(ls))

        return num
```
