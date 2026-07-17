---
date: 2024-05-12
difficulty: Medium
num: 2300
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2300. Successful Pairs Of Spells And Potions

## Description
if you can multiple spell with potion and product > success

## Approach / Thoughts
sort potions and binary search to get min half

## Solution
```python
class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        potions.sort()

        def successful(cur_spell, cur_potion):
            return cur_spell * cur_potion >= success

        ans = []
        for s in spells:
            res = float("inf")
            l, r = 0, len(potions) - 1
            while l <= r:
                mid = (l + r) // 2
                if successful(s, potions[mid]):
                    res = min(res, mid)
                    r = mid - 1
                else:
                    l = mid + 1
            res = res if res != float("inf") else len(potions)
            ans.append(len(potions) - res)
        return ans
```
