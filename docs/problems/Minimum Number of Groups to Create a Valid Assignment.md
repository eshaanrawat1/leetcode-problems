---
date: 2026-06-16
difficulty: Medium
num: 2910
related_topics:
  - Array
  - Hash Table
  - Greedy
return: Review
---

# Problem: 2910. Minimum Number of Groups to Create a Valid Assignment

## Description
You are given a collection of numbered `balls` and instructed to sort them into boxes for a nearly balanced distribution. There are two rules you must follow:

	- Balls with the same box must have the same value. But, if you have more than one ball with the same number, you can put them in different boxes.

	- The biggest box can only have one more ball than the smallest box.

​Return the *fewest number of boxes* to sort these balls following these rules.

## Approach / Thoughts
hard math problem

the idea is that we can either make a group of size k or size k+1. to see if a split is valid, we check two splits
- first find how many groups are exactly size k `v // s`
- then find what our remainder is `v % s`
- say we have 10 groups and a remainder of 3, then we can redistribute the groups in our remainder to get some groups of 10 and some groups of 11
- however if we have 10 groups and a remainder of 15 for example, we can't redistribute without creating some groups of 11 and some groups of 12 which is invalid

once we have the valid split
- we can test it with ceil of the k+1 since that guarantees the minimum number of groups needed - it's basically the same as the remainder logic we did for k in f(s), but since there are some groups of k and some of k+1, ceil finds the absolute minimum for k+1 using f as a filter (because any leftover can be distributed to, the opposite direction of distribution compared to f(s))

the more intuitive explanation does the reverse
- start with i
- try to fill as many boxes as possible with i+1 balls
- see if we can move balls from the i+1 boxes to the sole remainder box 
- if we can, this is a valid split - add the number of boxes which is greedily the minimum
- the trick is that we have b boxes (to give) and we need to achieve size at least i
- so if `b >= i - r` we can make a valid split

## Solution
```python
class Solution:
    def minGroupsForValidAssignment(self, balls: List[int]) -> int:
        cnt = Counter(balls)
        m = min(cnt.values())

        def f(s):
            for v in cnt.values():
                b, r = divmod(v, s)
                if b < r:
                    return False
            return True
        
        for i in range(m, 0, -1):
            if f(i) or i == 1:
                x = i + 1
                return sum(ceil(v / x) for v in cnt.values())
                
class Solution:
    def minGroupsForValidAssignment(self, balls: List[int]) -> int:
        cnt = Counter(balls)
        m = min(cnt.values())

        def f(s):
            boxes = 0
            ns = s + 1

            for v in cnt.values():
                b, r = divmod(v, ns)
                
                if r == 0:
                    boxes += b
                elif b >= s - r:
                    boxes += b + 1
                else:
                    return inf
                    
            return boxes
        
        return min(f(i) for i in range(m, 0, -1))
```