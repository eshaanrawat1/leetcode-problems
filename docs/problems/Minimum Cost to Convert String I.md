---
date: 2024-07-27
difficulty: Medium
num: 2976
related_topics:
  - Array
  - Graph
  - Shortest Path
  - String
return: Done
---

# Problem: 2976. Minimum Cost To Convert String I

## Description
way to change src to target string based on graph rules

## Approach / Thoughts
djikstra of floyd warshall for shortest path between letter pairs

## Solution
```python
class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        res = [[float("inf")] * 26 for _ in range(26)]

        for i in range(len(original)):
            o_idx = ord(original[i]) - ord('a')
            c_idx = ord(changed[i]) - ord('a')
            price = cost[i]

            res[o_idx][c_idx] = min(res[o_idx][c_idx], price)

        for k in range(26):
            for i in range(26):
                for j in range(26):
                    res[i][j] = min(
                        res[i][j], res[i][k] + res[k][j])


        total = 0
        for src, tgt in zip(source, target):
            if src == tgt:
                continue
            source_char = ord(src) - ord("a")
            target_char = ord(tgt) - ord("a")

            total += res[source_char][target_char]

        return total if total != float("inf") else -1
```
