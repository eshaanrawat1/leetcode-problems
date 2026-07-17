---
date: 2024-11-03
difficulty: Medium
num: 433
related_topics:
  - BFS
  - Hash Table
  - String
return: Done
---

# Problem: 433. Minimum Genetic Mutation

## Description
word ladder with genes

## Approach / Thoughts
bfs with changing characters

## Solution
```python
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        q = deque([[startGene, 0]])

        visit = {startGene}
        bank = set(bank)

        while q:
            cur, steps = q.popleft()

            if cur == endGene:
                return steps

            for c in 'ACGT':
                for i in range(len(cur)):
                    new_cur = cur[:i] + c + cur[i+1:]
                    if new_cur in bank and new_cur not in visit:
                        q.append([new_cur, steps+1])
                        visit.add(new_cur)
        return -1
```
