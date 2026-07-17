---
date: 2024-04-14
difficulty: Medium
num: 904
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 904. Fruit Into Basket

## Description
Find max subarray with only two distinct elements

## Approach / Thoughts
Sliding window with hashmap counter

## Solution
```python
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        visited = {}
        res = 0

        l = 0
        for r in range(len(fruits)):
            visited[fruits[r]] = 1 + visited.get(fruits[r], 0)

            while len(visited) > 2:
                visited[fruits[l]] -= 1
                if visited[fruits[l]] <= 0:
                    del visited[fruits[l]]
                l += 1
            res = max(res, r-l+1)
        return res
```
