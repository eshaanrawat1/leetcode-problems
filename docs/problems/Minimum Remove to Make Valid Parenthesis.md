---
date: 2024-04-05
difficulty: Medium
num: 1249
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1249. Minimum Remove To Make Valid Parenthesis

## Description
Same as problem

## Approach / Thoughts
Remove all invalid close then iterate in reverse and remove invalid open

## Solution
```python
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        s_list = list(s)

        o = c = 0
        for i, ch in enumerate(s_list):
            if ch == '(': o += 1
            if ch == ')': c += 1

            if c > o: 
                s_list[i] = ''
                c -= 1

        
        if o > c:
            for i in range(len(s_list)-1,-1,-1):
                if o == c: break

                if s_list[i] == '(': 
                    s_list[i] = ''
                    o -= 1
        
        return ''.join(s_list)            
```
