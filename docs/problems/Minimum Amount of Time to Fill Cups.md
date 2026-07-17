---
date: 2024-05-25
difficulty: Easy
num: 2335
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2335. Minimum Amount Of Time To Fill Cups

## Description
fill cups

## Approach / Thoughts
math approach and distribute stacks

## Solution
```python
class Solution:
    def fillCups(self, amount: List[int]) -> int:
        amount.sort()  
        a, b, c = amount
        
        return c if a + b <= c else math.ceil((a+b+c+1) // 2)
```
