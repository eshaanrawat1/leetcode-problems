---
date: 2024-12-25
difficulty: Hard
num: 3399
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
return: Done
---

# Problem: 3399. Smallest Substring With Identical Characters Ii

## Description

## Approach / Thoughts
same as prev

## Solution
```python
class Solution:
    def minLength(self, s: str, numOps: int) -> int:

        def make_nums():
            nums = []
            i, S = 0, len(s)
            while i < S:
                j = i
                while j < S and s[i] == s[j]:
                    j += 1
                nums.append(j - i)
                i = j
            return nums

        def case_one():
            a = b = 0
            for i in range(len(s)):  
                if i % 2 == 0:
                    if s[i] == '1':
                        a += 1
                else:
                    if s[i] == '0':
                        a += 1

            for i in range(len(s)):
                if i % 2 == 1:
                    if s[i] == '1':
                        b += 1
                else:
                    if s[i] == '0':
                        b += 1
            return min(a, b)

        def check(threshold):
            if threshold == 1:
                return case_one() <= numOps

            total = 0
            for n in nums:
                total += (n // (threshold + 1))
            return total <= numOps

        nums = make_nums()

        l, r = 1, len(s)
        res = None

        while l <= r:
            m = (l + r) // 2
            if check(m):
                r = m - 1
                res = m
            else:
                l = m + 1
        return res
```
