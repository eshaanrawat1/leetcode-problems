---
date: 2024-04-28
difficulty: Medium
num: 2997
related_topics:
  - Array
  - Bit Manipulation
return: Done
---

# Problem: 2997. Minimum Number Of Operations To Make Array Xor Equal To K

## Description
same as title

## Approach / Thoughts
xor all numbers in characters

remove last bits and check all mismatches

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        total_xor = 0
        for n in nums:
            total_xor = total_xor ^ n
        
        count = 0
        while total_xor > 0 or k > 0:
            if (total_xor % 2) != (k % 2):
                count += 1
            
            total_xor //= 2
            k //= 2
        return count
```
