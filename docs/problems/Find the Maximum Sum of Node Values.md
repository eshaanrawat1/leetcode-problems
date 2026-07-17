---
date: 2024-05-18
difficulty: Hard
num: 3068
related_topics:
  - Array
  - Bit Manipulation
  - Dynamic Programming
  - Greedy
  - Sorting
  - Tree
return: Done
---

# Problem: 3068. Find The Maximum Sum Of Node Values

## Description
finding max sum of nodes after xor any two nodes in pairs

## Approach / Thoughts
tree is connected and double xor is same, can xor any two non adjacent nodes

find the xor delta to get max benefit for us after xor

take all pairs greedily

## Solution
```python
class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:    
        deltas = [(n^k)-n for n in nums]
        deltas.sort(reverse=True)
        res = sum(nums)

        D = len(deltas)
        for i in range(0, D, 2):
            if i == D-1:
                break

            cur_delta = deltas[i] + deltas[i+1]
            if cur_delta >= 0:
                res += cur_delta
            else:
                break
        return res
```
