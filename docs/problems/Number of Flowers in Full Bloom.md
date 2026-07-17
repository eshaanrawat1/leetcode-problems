---
date: 2024-09-15
difficulty: Hard
num: 2251
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Ordered Set
  - Prefix Sum
  - Sorting
return: Done
---

# Problem: 2251. Number Of Flowers In Full Bloom

## Description

## Approach / Thoughts
prefix sum dict for blooms

map index to people, cache for repeats

assign prefix sum running to each person

## Solution
```python
class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        blooms = defaultdict(int)
        blooms[0] = 0

        for start, end in flowers:
            blooms[start] += 1
            blooms[end + 1] -= 1

        people_to_idx = defaultdict(list)
        for i, p in enumerate(people):
            people_to_idx[p].append(i)

        res = [0] * len(people)
        ps = i = 0

        cache = defaultdict(int)
        people.sort()

        for b in sorted(blooms):
            if i < len(people) and people[i] in cache:
                i += 1
            while i < len(people) and b > people[i]:
                cache[people[i]] = ps
                i += 1
            ps += blooms[b]

        for p in people_to_idx:
            val = cache[p]
            for idx in people_to_idx[p]:
                res[idx] = val

        return res
```
