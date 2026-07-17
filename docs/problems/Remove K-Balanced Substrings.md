---
date: 2025-12-13
difficulty: Medium
num: 3703
related_topics:
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 3703. Remove K Balanced Substrings

## Description
same, exactly k

## Approach / Thoughts
merge adjacent same characters, remove groups of k

## Solution
```python
class Solution:
    def removeSubstring(self, s: str, k: int) -> str:
        stack = []

        for c in s:
            if stack and stack[-1][0] == c:
                stack[-1][1] += 1
            else:
                stack.append([c, 1])

            if len(stack) >= 2:
                c2, cnt2 = stack.pop()
                c1, cnt1 = stack.pop()

                if c1 == '(' and c2 == ')':
                    while cnt1 >= k and cnt2 >= k:
                        cnt1 -= k
                        cnt2 -= k
               
                if cnt1 > 0: stack.append([c1, cnt1])
                if cnt2 > 0: stack.append([c2, cnt2])

        return ''.join(c*cnt for c,cnt in stack) if stack else ""
```
