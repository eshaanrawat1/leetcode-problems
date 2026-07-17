---
date: 2025-04-15
difficulty: Medium
num: 2537
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 2537. Count The Number Of Good Subarrays

## Description
same, good if at most k pairs of same numbers

## Approach / Thoughts
same sliding window - flip problem - instead of finding subarrays at least k, subarrays < k

use combinations to find number of pairs

## Solution
```python
class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        n = len(nums)
        freq = Counter()

        l = res = pairs = 0
        for r, v in enumerate(nums):
            pairs -= comb(freq[v], 2)
            freq[v] += 1
            pairs += comb(freq[v], 2)

            while pairs >= k:
                lval = nums[l]
                pairs -= comb(freq[lval], 2)
                freq[lval] -= 1
                pairs += comb(freq[lval], 2)
                l += 1
            res += (r - l + 1)
        return (n * (n+1) // 2) - res
```
