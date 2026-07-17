---
date: 2024-05-02
difficulty: Medium
num: 946
related_topics:
  - Array
  - Simulation
  - Stack
return: Done
---

# Problem: 946. Validate Stack Sequences

## Description
Check if combinations of push and pop can make one sequence another

## Approach / Thoughts
Matched numbers pop, see if we can keep doing that, else push

## Solution
```python
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        pops = deque(popped)
        
        i = 0
        while (stack or pops) and i < len(pushed):
            stack.append(pushed[i])

            while stack and pops and stack[-1] == pops[0]:
                stack.pop()
                pops.popleft()
            i += 1

        return i == len(pushed) and not stack and not pops
                
```
