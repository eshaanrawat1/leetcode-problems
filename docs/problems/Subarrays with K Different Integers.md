---
date: 2024-10-08
difficulty: Hard
num: 992
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sliding Window
return: Review
---

# Problem: 992. Subarrays With K Different Integers

## Description

## Approach / Thoughts
exactly(k) = atMost(k) - atMost(k-1)

5 = 5,4,3,2,1 - 4,3,2,1

## Solution
```python
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:

        def atMost(k):
            l = total = have = 0
            visit = defaultdict(int)

            for r in range(len(nums)):
                if visit[nums[r]] == 0:
                    have += 1
                visit[nums[r]] += 1

                while have > k:
                    visit[nums[l]] -= 1
                    if visit[nums[l]] == 0:
                        have -= 1
                    l += 1
                    
                total += r - l + 1
            return total

        return atMost(k) - atMost(k-1)
```
