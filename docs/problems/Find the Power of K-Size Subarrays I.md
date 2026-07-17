---
date: 2024-11-16
difficulty: Medium
num: 3254
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 3254. Find The Power Of K Size Subarrays I

## Description

## Approach / Thoughts
sliding window and pop

## Solution
```python
class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)

        def check_increase(cur_min, idx):
            m = cur_min
            for _ in range(k):
                if m != nums[idx]:
                    return False
                m += 1
                idx += 1
            return True

        res = []
        q = deque([])
        for i in range(k):
            q.append(nums[i])

        ans = nums[k-1] if check_increase(min(q), 0) else -1
        res.append(ans)

        for i in range(k, n):
            q.append(nums[i])
            q.popleft()

            ans = nums[i] if check_increase(min(q), i-k+1) else -1
            res.append(ans)
        return res
```
