---
date: 2024-01-17
difficulty: Easy
num: 70
related_topics:
  - Dynamic Programming
  - Math
  - Memoization
return: Done
---

# Problem: 70. Climbing Stairs

## Description
You can climb 1 stair or 2, how many ways can you reach the nth stair.

## Approach / Thoughts
To reach a certain stair, its how many ways you can reach the two previous stairs since thats how you reach the nth stair. Start with the absolute trivial base cases and work up.

## Solution
```python
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {1: 1, 2: 2}
        for i in range(3, n+1):
            memo[i] = memo[i-1] + memo[i-2]
        return memo[n]
```
