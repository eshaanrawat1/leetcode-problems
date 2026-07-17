---
date: 2024-06-05
difficulty: Medium
num: 1296
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1296. Divide Array In Sets Of K Consecutive Numbers

## Description
same as hand of straights 846

## Approach / Thoughts
sort and check if consecutive streak exists

## Solution
```python
class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        nums.sort()

        cnt = Counter(nums)
        for n in nums:
            if cnt[n] == 0:
                continue
            for j in range(n, n+k):
                if cnt[j] == 0:
                    return False
                cnt[j] -= 1
   
        return not sum(cnt.values())
```
