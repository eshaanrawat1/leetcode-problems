---
date: 2024-08-14
difficulty: Easy
num: 860
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 860. Lemonade Change

## Description
see if we have enough change for 10 and 20

## Approach / Thoughts
greedy, keep as many fives

## Solution
```python
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        change = defaultdict(int)

        for b in bills:
            if b == 5:
                change[5] += 1
            elif b == 10:
                if change[5]:
                    change[10] += 1
                    change[5] -= 1
                else:
                    return False
            else:
                if not change[5]:
                    return False
                else:
                    if change[10]:
                        change[10] -= 1
                        change[5] -= 1
                    else:
                        change[5] -= 3

                    if change[5] < 0:
                        return False
        return True
```
