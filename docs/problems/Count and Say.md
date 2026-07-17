---
date: 2025-04-18
difficulty: Medium
num: 38
related_topics:
  - String
return: Done
---

# Problem: 38. Count And Say

## Description
same, run length encoding of each previous val

## Approach / Thoughts
iteratively build up, count

## Solution
```python
class Solution:
    def countAndSay(self, n: int) -> str:
        res = ['1']

        for i in range(n):
            if i + 1 == n:
                return ''.join(res)

            tmp = []
            k = 0
            while k < len(res):
                j, cnt = k + 1, 1
                while j < len(res) and res[k] == res[j]:
                    j += 1
                    cnt += 1
                tmp.append(str(cnt))
                tmp.append(res[k])
                k = j

            res = tmp
```
