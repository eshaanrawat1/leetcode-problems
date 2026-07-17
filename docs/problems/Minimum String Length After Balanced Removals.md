---
date: 2025-11-17
difficulty: Medium
num: 3746
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 3746. Minimum String Length After Balanced Removals

## Description
can remove any substring where num_a == num_b

## Approach / Thoughts
stack remove one pair at a time, preserves invariant

## Solution
```python
class Solution:
    def minLengthAfterRemovals(self, s: str) -> int:
        stack = []
        for c in s:
            if stack and c == 'a' and stack[-1] == 'b':
                stack.pop()
            elif stack and c == 'b' and stack[-1] == 'a':
                stack.pop()
            else:
                stack.append(c)
        return len(stack)
```
