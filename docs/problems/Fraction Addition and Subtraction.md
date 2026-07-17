---
date: 2024-08-22
difficulty: Medium
num: 592
related_topics:
  - Math
  - Simulation
  - String
return: Done
---

# Problem: 592. Fraction Addition And Subtraction

## Description

## Approach / Thoughts
parse and add

## Solution
```python
from numpy import lcm
from math import gcd

class Solution:
    def fractionAddition(self, expression: str) -> str:
        signs = {'+', '-'}
        def frac(s):
            if not s:
                return 
            print(s)

            start = 3
            if s[:6] == '-10/10' or s[:6] == '+10/10':
                start = 6
            
            tmp = s[:5]
            if tmp.endswith('10'):
                start = 5

            if start != 5:
                tmp = s[:4]
                if tmp.endswith('10'):
                    start = 4

                if s[0] in signs and s[1:3] == '10':
                    start = 5

                if s.startswith('10'):
                    start = 4

                if s[0] in signs and s[2] == '/':
                    start = 4
            

            return s[:start], start
    

        fracs = []
        while expression:
            cur, idx = frac(expression)
            fracs.append(cur)
            expression = expression[idx:]
 

        denoms = []
        for i in range(len(fracs)):
            fracs[i] = fracs[i].split('/')
            denoms.append(int(fracs[i][-1]))

        num = 0
        mult = int(lcm.reduce(denoms))
        for n, d in fracs:
            num += (mult // int(d)) * int(n)

        if num == 0:
            return f"0/1"

        g = gcd(num, mult)
        return f"{num // g}/{mult // g}"
```
