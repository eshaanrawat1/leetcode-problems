---
date: 2024-08-07
difficulty: Hard
num: 273
related_topics:
  - Math
  - Recursion
  - String
return: Done
---

# Problem: 273. Integer To English Words

## Description

## Approach / Thoughts
billions, millions, thousands

helper function for smaller digits

## Solution
```python
class Solution:
    def __init__(self):
        self.lessThan20 = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
        self.tens = ["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]

    def numberToWords(self, num: int) -> str:
        res = []

        def make_small(n):
            if n < 20:
                return self.lessThan20[n]
            elif n < 100:
                return (self.tens[n//10] + ' ' + self.lessThan20[n%10]).strip()
            else:
                hundreds = n // 100
                tens = n % 100

                return (self.lessThan20[hundreds] + ' Hundred ' +  make_small(tens)).strip()

        def make_big(n):
            cur = n // (10 ** 9)
            remain = n % (10 ** 9)

            if cur:
                dig = make_small(cur)
                res.append(dig)
                res.append(" Billion ")

            cur = remain // (10 ** 6)
            remain = remain % (10 ** 6)

            if cur:
                dig = make_small(cur)
                res.append(dig)
                res.append(" Million ")

            cur = remain // (10 ** 3)
            remain = remain % (10 ** 3)

            if cur:
                dig = make_small(cur)
                res.append(dig)
                res.append(" Thousand ")

            dig = make_small(remain)
            res.append(dig)
        
        make_big(num)
        return ''.join(res).strip() or "Zero"
```
