---
date: 2026-01-08
difficulty: Hard
num: 2382
related_topics:
  - Array
  - Ordered Set
  - Prefix Sum
  - Union Find
return: Done
---

# Problem: 2382. Maximum Segment Sum After Removals

## Description
same, separate sections, max seg sum

## Approach / Thoughts
reverse union find

## Solution
```python
class UnionFind:
    def __init__(self, n, nums):
        self.par = list(range(n))
        self.rank = [1] * n
        self.cur_sum = nums[:]
        
        self.pq = [0]

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1 = self.find(n1)
        p2 = self.find(n2)

        if p1 == p2:
            heapq.heappush(self.pq, -self.cur_sum[p1])
            return 

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
            self.cur_sum[p1] += self.cur_sum[p2]
            heapq.heappush(self.pq, -self.cur_sum[p1])
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
            self.cur_sum[p2] += self.cur_sum[p1]
            heapq.heappush(self.pq, -self.cur_sum[p2])

    def get_max(self):
        return -self.pq[0]

class Solution:
    def maximumSegmentSum(self, nums: List[int], removeQueries: List[int]) -> List[int]:
        n = len(nums)
        u = UnionFind(n, nums)

        maxseg = [0] * n
        present = [0] * n

        for i in range(n-1, -1, -1):
            maxseg[i] = u.get_max()

            cur = removeQueries[i]
            l = cur-1
            r = cur+1

            u.union(cur, cur)
            if 0 <= l < n and present[l]: u.union(l, cur)
            if 0 <= r < n and present[r]: u.union(r, cur)
            present[cur] = nums[cur]

        return maxseg      
```
