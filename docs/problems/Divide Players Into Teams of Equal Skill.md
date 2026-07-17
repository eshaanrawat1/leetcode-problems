---
date: 2024-10-03
difficulty: Medium
num: 2491
related_topics:
  - Array
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2491. Divide Players Into Teams Of Equal Skill

## Description

## Approach / Thoughts
greedy, pair big and small

## Solution
```python
class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        skill.sort()

        cur_sum = None
        total = 0

        l, r = 0, len(skill)-1
        while l < r:
            left = skill[l]
            right = skill[r]

            if cur_sum and cur_sum != left + right:
                return -1
            
            l += 1
            r -= 1

            cur_sum = left + right
            total += (left * right)
    
        return total
```
