---
date: 2025-05-14
difficulty: Hard
num: 3337
related_topics:
  - Counting
  - Dynamic Programming
  - Hash Table
  - Math
  - String
return: Review
---

# Problem: 3337. Total Characters In String After Transformations Ii

## Description

## Approach / Thoughts
matrix exp similar to knight dialer

## Solution
```python
class Solution:
    def lengthAfterTransformations(self, s: str, t: int, nums: List[int]) -> int:
        MOD = (10 ** 9 + 7)
        
        # freq array
        freq = [0] * 26
        for c in s:
            freq[ord(c) - ord('a')] += 1

        # matrix mapping
        matrix = [[0] * 26 for _ in range(26)]
        for i, v in enumerate(nums):
            for j in range(i+1, i+v+1):
                matrix[i][j%26] += 1

        # fast matrix mult
        def mat_mult(A, B):
            res = [[0] * 26 for _ in range(26)]
            for i in range(26):
                for k in range(26):
                    if A[i][k]:
                        for j in range(26):
                            res[i][j] = (res[i][j] + A[i][k] * B[k][j]) % MOD
            return res

        # matrix exp
        def mat_pow(m, p):
            res = [[1 if i == j else 0 for j in range(26)] for i in range(26)]

            while p > 0:
                if p % 2 == 1:
                    res = mat_mult(res, m)
                    p -= 1
                else:
                    m = mat_mult(m, m)
                    p //= 2
            return res

        # put it together
        res = mat_pow(matrix, t)
        final_freq = [0] * 26

        for i in range(26):
            for j in range(26):
                final_freq[i] += (res[i][j] * freq[i])
                final_freq[i] %= MOD
        return sum(final_freq) % MOD
```
