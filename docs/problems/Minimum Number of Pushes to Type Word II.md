---
date: 2024-08-05
difficulty: Medium
num: 3016
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 3016. Minimum Number Of Pushes To Type Word Ii

## Description

## Approach / Thoughts
greedy, assign least taps to most freq letters

count multiples of 8

## Solution
```python
class Solution:
    def minimumPushes(self, word: str) -> int:
        cnt = Counter(word)
        freq = [[] for _ in range(len(word)+1)]

        for ch in cnt:
            freq[cnt[ch]].append(ch)

        order = []
        for b in freq:
            order.extend(b)
        order = order[::-1]

        total = 0
        for idx, ch in enumerate(order):
            total += cnt[ch] * (idx // 8 + 1)
        return total
```
