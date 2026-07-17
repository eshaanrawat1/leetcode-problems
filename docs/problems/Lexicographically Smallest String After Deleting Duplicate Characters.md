---
date: 2026-01-22
difficulty: Hard
num: 3816
related_topics:
  - Greedy
  - Monotonic Stack
  - String
return: Done
---

# Problem: 3816. Lexicographically Smallest String After Deleting Duplicate Characters

## Description

## Approach / Thoughts
if char before is > char after, delete if possible - greedy

delete from end if possible → abcdd > abcd lex

## Solution
```python
class Solution:
    def lexSmallestAfterDeletion(self, s: str) -> str:
        freq = Counter(s)

        stack = []
        for c in s:
            while stack and stack[-1] > c and freq[stack[-1]] > 1:
                freq[stack.pop()] -= 1
            stack.append(c)

        while stack and freq[stack[-1]] > 1:
            freq[stack.pop()] -= 1
        return ''.join(stack)
```
