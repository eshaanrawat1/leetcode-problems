---
date: 2026-01-17
difficulty: Medium
num: 3805
related_topics:
  - Array
  - Counting
  - Hash Table
  - Math
  - String
return: Done
---

# Problem: 3805. Count Caesar Cipher Pairs

## Description

## Approach / Thoughts
adjacent diffs mod 26 need to be same

## Solution
```python
class Solution:
    def countPairs(self, words: List[str]) -> int:
        # 6:41
        # kind of had an intution about diff invariant
        # but was not sure on the formal proof - it 
        # ended up working
        
        def diff(w):
            cur_diff = []
            for i in range(1, len(w)):
                v = ord(w[i]) - ord(w[i-1])
                cur_diff.append(v % 26)
            return tuple(cur_diff)

        res = 0

        seen = Counter()
        for w in words:
            cur_diff = diff(w)
            res += seen[cur_diff]
            seen[cur_diff] += 1
        return res
```
