---
date: 2024-08-14
difficulty: Medium
num: 2384
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - String
return: Done
---

# Problem: 2384. Largest Palindromic Number

## Description

## Approach / Thoughts
greedy 9, 8 … pairs

get remaining middle value and choose largest one if there is one

## Solution
```python
class Solution:
    def largestPalindromic(self, num: str) -> str:
        freq = Counter(num)
        res, mid = [], []

        for n in '9876543210':
            if freq[n] % 2 == 0:
                res.extend([n] * (freq[n] // 2))
            else:
                res.extend([n] * (freq[n] // 2))
                mid.append(n)

        mid = [max(mid)] if mid else []
        res = res + mid + res[::-1]
        l, r = 0, len(res)-1
    
        while l <= r:
            if res[l] == '0':
                l += 1
                r -= 1
            else:
                break
        
        return ''.join(res[l:r+1]) or '0'
```
