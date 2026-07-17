---
date: 2025-01-14
difficulty: Medium
num: 2429
related_topics:
  - Bit Manipulation
  - Greedy
return: Done
---

# Problem: 2429. Minimize Xor

## Description
min x xor nums1, where x has same number of set bits as nums2

## Approach / Thoughts
count set bits

minimize 1s, use remaining set bits if needed

## Solution
```python
class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        set_bits = 0
        for i in range(33):
            if num2 & (1 << i):
                set_bits += 1
        
        res = 0
        for i in range(33, -1, -1):
            if num1 & (1 << i):
                if set_bits:
                    set_bits -= 1
                    res |= (1 << i)
            else:
                if set_bits - i - 1 == 0:
                    set_bits -= 1
                    res |= (1 << i)
        return res
```
