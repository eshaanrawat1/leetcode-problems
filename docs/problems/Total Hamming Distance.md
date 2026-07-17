---
date: 2024-09-17
difficulty: Medium
num: 477
related_topics:
  - Array
  - Bit Manipulation
  - Math
return: Done
---

# Problem: 477. Total Hamming Distance

## Description
number of positions where bits are different

## Approach / Thoughts
get mask for each bit

find permutations #1 * #0

## Solution
```python
class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        N = len(nums)
        positions = [0] * 33

        for i in range(0, 33):
            for n in nums:
                mask = 1 if n & (1 << i) else 0
                positions[i] += mask

        total = 0
        for p in positions:
            total += (p * (N - p))
        return total
```
