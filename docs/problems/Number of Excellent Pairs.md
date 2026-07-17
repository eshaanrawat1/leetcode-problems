---
date: 2024-12-10
difficulty: Hard
num: 2354
related_topics:
  - Array
  - Binary Search
  - Bit Manipulation
  - Hash Table
return: Done
---

# Problem: 2354. Number Of Excellent Pairs

## Description
pairs where a & b + a | b > k (number of set bits)

## Approach / Thoughts
inclusion exclusion - and + or = number of set bits in a, b

two pointer for count

## Solution
```python
class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        sb = Counter()
        for n in nums:
            sb[n] = bin(n).count('1')

        bits = sorted(list(sb.values()))
        N = len(bits)

        cnt, l, r = 0, 0, N-1
        while l <= r:

            while l <= r and bits[l] + bits[r] < k:
                l += 1

            if l > r:
                break

            cnt += ((r - l + 1) * 2 - 1)
            r -= 1
        return cnt
```
