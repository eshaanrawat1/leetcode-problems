---
date: 2025-07-27
difficulty: Hard
num: 899
related_topics:
  - Math
  - Sorting
  - String
return: Done
---

# Problem: 899. Orderly Queue

## Description
same, make min string can append any of first k to the end

## Approach / Thoughts
check 1 and other cases

## Solution
```python
class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k > 1:
            return ''.join(sorted(s))

        q = deque([])
        for c in s:
            q.append(c)

        res = s
        for _ in range(len(s)):
            q.append(q.popleft())
            cur = ''.join(q)
            res = min(res, cur)
        return res
```
