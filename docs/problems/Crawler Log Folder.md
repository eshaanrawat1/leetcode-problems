---
date: 2024-07-10
difficulty: Easy
num: 1598
related_topics:
  - Array
  - Stack
  - String
return: Done
---

# Problem: 1598. Crawler Log Folder

## Description
keep track of depth

## Approach / Thoughts
counter forward and back

## Solution
```python
class Solution:
    def minOperations(self, logs: List[str]) -> int:
        res = 0

        for l in logs:
            if l == '../':
                res = max(0, res-1)
            elif l == './':
                continue
            else:
                res += 1
        return res
```
