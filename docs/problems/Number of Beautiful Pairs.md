---
date: 2023-12-29
difficulty: Easy
num: 2748
related_topics:
  - Array
  - Math
  - Number Theory
return: Done
---

# Problem: 2748. Number Of Beautiful Pairs

## Description
Find num of beautiful pairs

- pair if first digit of a number and last digit of another number are coprime

- coprime is when only gcd is 1

## Approach / Thoughts
Use two nested for loops to check every pair.

## Solution
```python
class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        ans = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                temp = str(nums[i])
                first = int(temp[0])
                last = nums[j] % 10
                if gcd(first, last) == 1:
                    ans += 1
        return ans
```
