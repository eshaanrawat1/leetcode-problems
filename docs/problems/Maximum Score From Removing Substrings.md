---
date: 2024-07-11
difficulty: Medium
num: 1717
related_topics:
  - Greedy
  - Stack
  - String
return: Done
---

# Problem: 1717. Maximum Score From Removing Substrings

## Description
remove ab or ba for max score

## Approach / Thoughts
proof - removing substring aba keeps rest of string same

prefix + a + suffix

always remove max value one

## Solution
```python
class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        stack = []
        take = "ab" if x >= y else "ba"
        skip = "ab" if take == "ba" else "ba"
        
        if take == "ba":
            x, y = y, x

        score = 0
        for ch in s:
            if stack and stack[-1] + ch == take:
                stack.pop()
                score += x
            else:
                stack.append(ch)

        second = []
        for ch in stack:
            if second and second[-1] + ch == skip:
                second.pop()
                score += y
            else:
                second.append(ch)
        
        return score
```
