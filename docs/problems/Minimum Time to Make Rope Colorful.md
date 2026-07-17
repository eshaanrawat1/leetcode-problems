---
date: 2023-12-26
difficulty: Medium
num: 1578
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - String
return: Done
---

# Problem: 1578. Minimum Time To Make Rope Colorful

## Description
Remove consecutive balloons with a minimum cost.

## Approach / Thoughts
1. Have a two pointer approach with a previous pointer and one with a for loop. The loop goes and checks.

1. If the prev and the current balloons are not the same, update prev to i

1. If they are equal, then add the min cost to the total time
    
    1. Also check which cost is smaller - if prev is smaller than we eliminate the prev ballon, so we set prev to i - that way we can have prev lag behind a little bit to account for it

## Solution
```javascript
class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total = prev = 0

        for i in range(1, len(colors)):
            if colors[prev] != colors[i]:
                prev = i
            else:
                total += min(neededTime[prev], neededTime[i])
                if neededTime[prev] < neededTime[i]:
                    prev = i
        return total
```
