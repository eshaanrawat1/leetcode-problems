---
date: 2024-05-18
difficulty: Medium
num: 1209
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1209. Remove All Adjacent Duplicates In String Ii

## Description
remove all duplicates of k length

## Approach / Thoughts
stack and check if dupe is k length

## Solution
```python
class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        stack = []
        
        for i in range(len(s)):
            if stack and stack[-1][-1] == s[i]:
                stack[-1] += s[i]
            else:
                stack.append(s[i]) 
            
            if stack and len(stack[-1]) == k:
                stack.pop()
                
        return ''.join(stack)
```
