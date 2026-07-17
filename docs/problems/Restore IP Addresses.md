---
date: 2025-02-06
difficulty: Medium
num: 93
related_topics:
  - Backtracking
  - String
return: Done
---

# Problem: 93. Restore Ip Addresses

## Description

## Approach / Thoughts
backtrack handle leading 0s

## Solution
```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        n = len(s)
        res = []

        def dfs(i, arr, cnt):
            if i >= n and cnt == 4:
                res.append(''.join(arr))
                return 
            if i >= n or cnt > 4:
                return 

            for j in range(i, n):
                num = int(s[i:j+1])
                if 0 <= num <= 255:
                    if num == 0 and i != j:
                        continue
                    if num == 0 or (num != 0 and s[i] != '0'):
                        dfs(j+1, arr + [s[i:j+1], '.'], cnt + 1)

        dfs(0, [], 0)
        return [x[:-1] for x in res]
```
