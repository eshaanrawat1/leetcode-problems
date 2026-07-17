---
date: 2025-05-01
difficulty: Medium
num: 838
related_topics:
  - Dynamic Programming
  - String
  - Two-Pointer
return: Done
---

# Problem: 838. Push Dominoes

## Description

## Approach / Thoughts
cover pairs of r and l, handle individual separately

## Solution
```python
class Solution:
    def pushDominoes(self, A: str) -> str:
        n = len(A)

        res = [c for c in A]

        def fill_left(k):
            while k >= 0 and (res[k] == '.' or res[k] == 'L'):
                res[k] = 'L'
                k -= 1

        def fill_right(k):
            while k < n and (res[k] == '.' or res[k] == 'R'):
                res[k] = 'R'
                k += 1

        def fill_right_until(start, end):
            while start < end:
                res[start] = 'R'
                start += 1

        def fill_mid(l, r):
            while l < r:
                res[l] = 'R'
                res[r] = 'L'
                l += 1
                r -= 1
            if l == r:
                res[l] = 'M'
                

        i = 0
        while i < n:
            if A[i] == 'R':

                j = i + 1
                flag = False

                while j < n:
                    if A[j] == 'L':
                        flag = True
                        fill_mid(i, j)
                        break
                    elif A[j] == 'R':
                        fill_right_until(i, j)
                        j -= 1
                        flag = True
                        break
                    j += 1

                if not flag:
                    fill_right(i)
                    break

                i = j + 1
                continue
                
                
            elif A[i] == 'L':
                fill_left(i)
            i += 1

        ans = []
        for c in res:
            if c == 'M':
                ans.append('.')
            else:
                ans.append(c)
        return ''.join(ans)
```
