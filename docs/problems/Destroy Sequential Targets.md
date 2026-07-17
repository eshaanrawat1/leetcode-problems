---
date: 2024-10-25
difficulty: Medium
num: 2453
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 2453. Destroy Sequential Targets

## Description
same, delete all with same modulo, min element

## Approach / Thoughts
count modulos and sort

## Solution
```python
class Solution:
    def destroyTargets(self, nums: List[int], space: int) -> int:
        rems = defaultdict(int)
        for n in nums:
            rems[n % space] += 1

        nums.sort()
        max_freq = max(rems.values())

        for n in nums:
            if rems[n % space] == max_freq:
                return n
        return nums[0]
```
