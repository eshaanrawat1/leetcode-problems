---
date: 2025-10-16
difficulty: Easy
num: 2432
related_topics:
  - Array
return: Done
---

# Problem: 2432. The Employee That Worked On The Longest Task

## Description

## Approach / Thoughts
sequential, track start ends

## Solution
```python
class Solution:
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
        m = len(logs)
        
        max_emp = logs[0][0]
        max_leave = logs[0][1]

        for i in range(1, m):
            prev_emp, prev_leave = logs[i-1]
            cur_emp, cur_leave = logs[i]

            if (cur_leave - prev_leave) > max_leave:
                max_emp = cur_emp
                max_leave = cur_leave - prev_leave
            elif (cur_leave - prev_leave) == max_leave:
                if cur_emp < max_emp:
                    max_emp = cur_emp
        return max_emp
```
