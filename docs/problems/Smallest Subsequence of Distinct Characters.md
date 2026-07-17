---
date: 2025-10-02
difficulty: Medium
num: 1081
related_topics:
  - Greedy
  - Monotonic Stack
  - Stack
  - String
return: Done
---

# Problem: 1081. Smallest Subsequence Of Distinct Characters

## Description

## Approach / Thoughts
same as 316

## Solution
```python
class Solution:
    def smallestSubsequence(self, s: str) -> str:
        used = Counter()
        to_the_right = Counter(s)

        stack = []
        for c in s:
            while stack and ord(c) <= ord(stack[-1]) and used[c] == 0 and to_the_right[stack[-1]] > 0:
                used[stack[-1]] -= 1
                stack.pop()

            if used[c] == 0:
                used[c] += 1
                stack.append(c)
            to_the_right[c] -= 1
        return ''.join(stack)
```
