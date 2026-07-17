---
date: 2024-08-06
difficulty: Medium
num: 3092
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Ordered Set
return: Review
---

# Problem: 3092. Most Frequent Ids

## Description
find max in changing freqs

## Approach / Thoughts
heap with lazy changing

## Solution
```python
class Solution:
    def mostFrequentIDs(self, nums: List[int], freq: List[int]) -> List[int]:
        cnt = defaultdict(int)
        pq, ans = [], []

        for n, f in zip(nums, freq):
            cnt[n] += f

            heapq.heappush(pq, [-cnt[n], n])

            while pq and -pq[0][0] != cnt[pq[0][1]]:
                heapq.heappop(pq)
            
            if pq:
                ans.append(-pq[0][0])
            else:
                ans.append(0)
        return ans
```
