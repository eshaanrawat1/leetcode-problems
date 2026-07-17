---
date: 2025-08-09
difficulty: Medium
num: 528
related_topics:
  - Array
  - Binary Search
  - Math
  - Prefix Sum
return: Done
---

# Problem: 528. Random Pick With Weight

## Description

## Approach / Thoughts
make buckets and use binary search for random int

## Solution
```python
class Solution:

    def __init__(self, w: List[int]):
        self.w = w
        self.buckets = []

        cur_start = 0
        for idx, wei in enumerate(w):
            self.buckets.append([idx, cur_start, cur_start+wei-1])
            cur_start += wei

        self.max_int = self.buckets[-1][-1]
        self.buckets_len = len(self.buckets)

    def pickIndex(self) -> int:
        cur_rand = random.randint(0, self.max_int)
        
        l, r = 0, self.buckets_len
        while l <= r:
            m = (l + r) // 2

            cur_bucket = self.buckets[m]  
            idx, start, end = cur_bucket

            if start <= cur_rand <= end:
                return idx

            if cur_rand < start:
                r = m - 1
            else:
                l = m + 1


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
```
