---
date: 2025-04-07
difficulty: Easy
num: 3396
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3396. Minimum Number Of Operations To Make Elements In Array Distinct

## Description
same, can remove front 3 in one operation

## Approach / Thoughts
brute force hashtable

## Solution
```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        cnt = Counter(nums)

        def check():
            for k, v in cnt.items():
                if v > 1:
                    return False
            return True



        ops = 0
        q = deque(nums)
        while q:
            if check():
                return ops 
            if len(q) < 3:
                return ops + 1

            ops += 1
            v1 = q.popleft()
            v2 = q.popleft()
            v3 = q.popleft()

            cnt[v1] -= 1
            cnt[v2] -= 1
            cnt[v3] -= 1
        return ops
```
