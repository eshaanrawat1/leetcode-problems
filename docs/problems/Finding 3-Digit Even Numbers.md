---
date: 2025-05-11
difficulty: Easy
num: 2094
related_topics:
  - Array
  - Enumeration
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2094. Finding 3 Digit Even Numbers

## Description

## Approach / Thoughts
generate all - permutations dfs

## Solution
```python
class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        cnt = Counter(digits)

        res = []
        def dfs(i, cur, cnt):
            if i >= 3:
                if cur % 2 == 0:
                    res.append(cur)
                return

            for c in cnt:
                if i == 0 and c == 0:
                    continue
                if cnt[c] > 0:
                    cnt[c] -= 1
                    dfs(i+1, cur*10+c, cnt)
                    cnt[c] += 1
        dfs(0, 0, cnt)
        return sorted(res)
```
