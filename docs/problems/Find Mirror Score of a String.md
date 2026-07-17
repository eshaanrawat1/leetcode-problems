---
date: 2025-01-28
difficulty: Medium
num: 3412
related_topics:
  - Hash Table
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 3412. Find Mirror Score Of A String

## Description

## Approach / Thoughts
keep track of mirrors and most recent indices, pop from

## Solution
```python
class Solution:
    def calculateScore(self, s: str) -> int:
        mirror = {}

        alpha = 'abcdefghijklmnopqrstuvwxyz'
        for i, c in enumerate(alpha):
            mirror[c] = alpha[~i]
        
        seen = defaultdict(list)
        score = 0

        for i, c in enumerate(s):
            reflect = mirror[c]

            if reflect in seen:
                if seen[reflect]:
                    val = seen[reflect].pop()
                    score += (i - val)
                    continue
                    
            seen[c].append(i)
        return score
```
