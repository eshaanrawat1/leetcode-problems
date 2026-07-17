---
date: 2026-03-08
difficulty: Hard
num: 710
related_topics:
  - Array
  - Hash Table
  - Math
  - Binary Search
  - Sorting
  - Randomized
return: Done
---

# Problem:  

## Description
You are given an integer `n` and an array of **unique** integers `blacklist`. Design an algorithm to pick a random integer in the range `[0, n - 1]` that is **not** in `blacklist`. Any integer that is in the mentioned range and not in `blacklist` should be **equally likely** to be returned.

Optimize your algorithm such that it minimizes the number of calls to the **built-in** random function of your language.

Implement the `Solution` class:

- `Solution(int n, int[] blacklist)` Initializes the object with the integer `n` and the blacklisted integers `blacklist`.
- `int pick()` Returns a random integer in the range `[0, n - 1]` and not in `blacklist`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
find ranges of valid numbers by comparing adjacent values


## Solution
```python
class Solution:

    def __init__(self, n: int, blacklist: List[int]):
        self.n = n

        self.blacklist = [-1] + blacklist + [self.n]
        self.blacklist.sort()
        self.m = len(self.blacklist)

        self.make_range()

    def make_range(self):
        self.res = []

        for i in range(self.m-1):
            prv = self.blacklist[i]
            nxt = self.blacklist[i+1]

            if nxt - prv > 1:
                self.res.append([prv+1, nxt-1])

        self.k = len(self.res)


    def pick(self) -> int:
        idx = random.randrange(0, self.k)
        l, r = self.res[idx]
        return random.randint(l, r)


# Your Solution object will be instantiated and called as such:
# obj = Solution(n, blacklist)
# param_1 = obj.pick()