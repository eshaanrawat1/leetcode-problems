---
date: 2023-09-10
difficulty: Medium
num: 1492
related_topics:
  - Math
  - Number Theory
return: Done
---

# Problem: 1492. Kth Factor Of N

## Description
To find all the factors of a number and return the Kth factor. For example, the 2nd factor of 12 is 2.

## Approach / Thoughts
My approach was to do it in O(n) complexity and just add all of the factors to a list in python and then use a conditional test.

If the list size was less than k, return -1, otherwise return the k-1 indexed element.

## Solution
```python
class Solution(object):
    def kthFactor(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """

        idx = 1
        res = []

        while idx <= n:
            if n % idx == 0:
                res.append(idx)
            idx += 1
        
        if len(res) < k:
            return -1
        else: 
            return res[k-1]
```
