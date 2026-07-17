---
date: 2025-05-12
difficulty: Medium
num: 3335
related_topics:
  - Counting
  - Dynamic Programming
  - Hash Table
  - Math
  - String
return: Done
---

# Problem: 3335. Total Characters In String After Transformations I

## Description
same, z → ab, all other characters increment a→b, b→c …

## Approach / Thoughts
frequency array of 26 keep track of transformations

## Solution
```python
class Solution:
    def lengthAfterTransformations(self, s: str, t: int) -> int:
        freq = [0] * 26
        for c in s:
            freq[ord(c) - ord('a')] += 1

        while t:
            tmp = [0] * 26
            for i in range(26):
                if i == 25:
                    tmp[0] += freq[i]
                    tmp[1] += freq[i]
                else:
                    tmp[i+1] = freq[i]
            freq = tmp
            t -= 1
        return sum(freq) % (10 ** 9 + 7)
```
