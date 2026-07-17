---
date: 2024-06-05
difficulty: Medium
num: 846
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Sorting
return: Done
---

# Problem: 846. Hand Of Straights

## Description
find if we can make consecutive sequences

## Approach / Thoughts
sort and then use map to count streaks

## Solution
```python
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
    
        cnt = Counter(hand)
        hand.sort()

        for i, h in enumerate(hand):
            if cnt[h] == 0:
                continue

            check = True
            for j in range(h, h+groupSize):
                if cnt[j] == 0:
                    check = False
                    break
            
            if check:
                for k in range(h, h+groupSize):
                    cnt[k] -= 1

        return not sum(cnt.values())
```
