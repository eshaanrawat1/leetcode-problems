---
date: 2025-11-03
difficulty: Easy
num: 3318
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Sliding Window
return: Done
---

# Problem: 3318. Find X Sum Of All K Long Subarrays I

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        n = len(nums)

        def calc(cnt):
            pairs = [(k,v) for k,v in cnt.items()]
            pairs.sort(key=lambda x: (-x[1], -x[0]))

            res = 0
            for i in range(min(x, len(pairs))):
                res += pairs[i][0] * pairs[i][1]
            return res

        freq = Counter(nums[:k])

        ans = []
        ans.append(calc(freq))

        for i in range(k, n):
            freq[nums[i-k]] -= 1
            freq[nums[i]] += 1
            ans.append(calc(freq))
        return ans
```
