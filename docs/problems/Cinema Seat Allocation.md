---
date: 2026-03-19
difficulty: Medium
num: 1386
related_topics:
  - Senior
  - Array
  - Hash Table
  - Greedy
  - Bit Manipulation
return:
---

# Problem:  

## Description
A cinema has `n` rows of seats, numbered from 1 to `n` and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.

Given the array `reservedSeats` containing the numbers of seats already reserved, for example, `reservedSeats[i] = [3,8]` means the seat located in row **3** and labelled with **8** is already reserved.

_Return the maximum number of four-person groups you can assign on the cinema seats._ A four-person group occupies four adjacent seats **in one single row**. Seats across an aisle (such as [3,3] and [3,4]) are not considered to be adjacent, but there is an exceptional case on which an aisle split a four-person group, in that case, the aisle split a four-person group in the middle, which means to have two people on each side.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
brute force each row with restrictions, count the rest

## Solution
```python
class Solution:
    def maxNumberOfFamilies(self, n: int, R: List[List[int]]) -> int:

        rows = defaultdict(list)
        for r, s in R:
            rows[r].append(s)

        def check(r):
            res = [1] * 10
            for s in rows[r]:
                res[s-1] = 0
            
            if all(res[1:5]) and all(res[5:9]):
                return 2
            if all(res[1:5]) or all(res[5:9]):
                return 1
            if all(res[3:7]):
                return 1
            return 0
                
        tot = (n - len(rows)) * 2
        for r in rows:
            tot += check(r)
        return tot

