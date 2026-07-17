---
date: 2025-03-29
difficulty: Medium
num: 763
related_topics:
  - Greedy
  - Hash Table
  - String
  - Two-Pointer
return: Done
---

# Problem: 763. Partition Labels

## Description
same, each instance of the same letter must be in the same partition

## Approach / Thoughts
make intervals and chain them

## Solution
```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        pos = defaultdict(list)
        for i, c in enumerate(s):
            pos[c].append(i)

        seen = set()
        intervals = []
        for c in s:
            if c in seen:
                continue
            seen.add(c)
            first = pos[c][0]
            last = pos[c][-1]
            intervals.append((first, last))
        
        stack = []
        for s, e in intervals:
            if stack and stack[-1][0] <= s <= stack[-1][-1]:
                stack[-1] = (stack[-1][0], max(e, stack[-1][-1]))
            else:
                stack.append((s, e))

        return [e-s+1 for s,e in stack]
```
