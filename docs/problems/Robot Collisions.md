---
date: 2024-07-13
difficulty: Hard
num: 2751
related_topics:
  - Array
  - Simulation
  - Sorting
  - Stack
return: Done
---

# Problem: 2751. Robot Collisions

## Description
check robot collisions

## Approach / Thoughts
same as asteroid collisions with extra positions and health to be subtracted on collisions, return in sorted order

## Solution
```python
class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        pairs = [[positions[i], healths[i], directions[i], i] for i in range(len(healths))]
        pairs.sort(key=lambda x:x[0])

        stack = []
        for r in pairs:
            cur_pos, cur_health, cur_dir, cur_index = r
            
            while stack and stack[-1][2] == 'R' and cur_dir == 'L':
                prev_pos, prev_health, prev_dir, prev_index = stack[-1]

                if prev_health == cur_health:
                    stack.pop()
                    cur_dir = None
                    r = None
                elif prev_health > cur_health:
                    stack[-1][1] -= 1
                    cur_dir = None
                    r = None
                else:
                    cur_health -= 1
                    stack.pop()
        
            if r:
                stack.append([cur_pos, cur_health, cur_dir, cur_index])
        
        ans = [(i[1], i[-1]) for i in stack]
        ans.sort(key=lambda x:x[-1])

        return [i[0] for i in ans]
```
