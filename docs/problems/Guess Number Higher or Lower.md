---
date: 2023-12-20
difficulty: Easy
num: 374
related_topics:
  - Binary Search
  - Interactive
return: Done
---

# Problem: 374. Guess Number Higher Or Lower

## Description
Play guessing game by calling guess API

- returns 0 if guess is correct

- -1 if guess is too high

- 1 if guess is too low

## Approach / Thoughts
normal binary search

## Solution
```python
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        low, high = 1, n 
        while True:
            choice = (low + high) // 2
            result = guess(choice)

            if result == 0:
                return choice
            elif result == -1:
                high = choice - 1
            else:
                low = choice + 1
```
