---
date: 2024-02-29
difficulty: Medium
num: 3039
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sorting
return: Done
---

# Problem: 3039. Apply Operations To Make String Empty

## Description
Each operation removes first unique letter

## Approach / Thoughts
Have a counter, max frequency is maximum number of operations

Iterate from reverse and add the first unique instance of the character that stays after all operations

Return string reversed

## Solution
```python
class Solution:
    def lastNonEmptyString(self, s: str) -> str:
        cnt = Counter(s)
        max_ops = max(cnt.values())
        visited = set()
        
        res = ""
        
        for i in range(len(s)-1,-1,-1):
            if cnt[s[i]] >= max_ops and s[i] not in visited:
                res += s[i]
                visited.add(s[i])
        return res[::-1]
```
