---
date: 2025-10-02
difficulty: Medium
num: 316
related_topics:
  - Greedy
  - Stack
  - String
return: Done
---

# Problem: 316. Remove Duplicate Letters

## Description

## Approach / Thoughts
if small letter than to the left, pop if possible - determine possible on two conditions

1 - have we used this letter before used[c] must be 0 to be eligible

2 - for the letter we are trying to pop, is there more occurrences on the right, to_the_right[p] > 0, since each letter must appear once, we can’t pop the last occurrence

## Solution
```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
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
