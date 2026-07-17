---
date: 2024-12-14
difficulty: Medium
num: 2762
related_topics:
  - Array
  - Heap (Priority Queue)
  - Monotonic Queue
  - Ordered Set
  - Queue
  - Sliding Window
return: Done
---

# Problem: 2762. Continuous Subarrays

## Description
same, max diff is 2

## Approach / Thoughts
ordered dict sliding window

## Solution
```python
from sortedcontainers import SortedDict 

class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        freq = SortedDict()

        l = res = 0
        for r in range(len(nums)):
            freq.setdefault(nums[r], 0)
            freq[nums[r]] += 1

            while max(freq) - min(freq) > 2:
                freq[nums[l]] -= 1
                if freq[nums[l]] == 0:
                    freq.pop(nums[l])
                l += 1

            res += (r - l + 1)
        return res          
```
