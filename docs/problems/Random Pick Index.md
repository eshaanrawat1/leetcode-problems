---
date: 2025-08-09
difficulty: Medium
num: 398
related_topics:
  - Hash Table
  - Math
  - Randomized
  - Reservoir Sampling
return: Done
---

# Problem: 398. Random Pick Index

## Description

## Approach / Thoughts
store indices and random choice

## Solution
```python
class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.idx = defaultdict(list)

        for i, n in enumerate(nums):
            self.idx[n].append(i)

    def pick(self, target: int) -> int:
        return random.choice(self.idx[target])


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)
```
