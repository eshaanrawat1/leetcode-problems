---
date: 2025-09-13
difficulty: Medium
num: 1807
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 1807. Evaluate The Bracket Pairs Of A String

## Description
same, replace (x) with mapping from x → y

## Approach / Thoughts
parse brackets

## Solution
```python
class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        mapping = {}
        for key, val in knowledge:
            mapping[key] = val
        
        res = []
        i, n = 0, len(s)

        while i < n:
            if s[i] == '(':
                cur = []
                i += 1
                while i < n and s[i] != ')':
                    cur.append(s[i])
                    i += 1
                tmp_cur = ''.join(cur)
                replace = mapping[tmp_cur] if tmp_cur in mapping else '?'
                res.append(replace)


            else:
                res.append(s[i])
            i += 1
        return ''.join(res)
                    
```
