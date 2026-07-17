---
date: 2026-03-06
difficulty: Hard
num: 972
related_topics:
  - Principal
  - Math
  - String
return:
---

# Problem:  

## Description
Given two strings `s` and `t`, each of which represents a non-negative rational number, return `true` if and only if they represent the same number. The strings may use parentheses to denote the repeating part of the rational number.

A **rational number** can be represented using up to three parts: `<IntegerPart>`, `<NonRepeatingPart>`, and a `<RepeatingPart>`. The number will be represented in one of the following three ways:

- `<IntegerPart>`
    - For example, `12`, `0`, and `123`.
- `<IntegerPart>**<.>**<NonRepeatingPart>`
    - For example, `0.5`, `1.`, `2.12`, and `123.0001`.
- `<IntegerPart>**<.>**<NonRepeatingPart>**<(>**<RepeatingPart>**<)>**`
    - For example, `0.1(6)`, `1.(9)`, `123.00(1212)`.

The repeating portion of a decimal expansion is conventionally denoted within a pair of round brackets. For example:

- `1/6 = 0.16666666... = 0.1(6) = 0.1666(6) = 0.166(66)`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
kind of cheat method - parse and math close

## Solution
```python
class Solution:
    def isRationalEqual(self, s: str, t: str) -> bool:
        
        def parse(x):
            if '.' not in x:
                x += '.0'

            irr = '0'
            l = len(x)
            if '(' in x:
                l = x.find('(')
                r = x.find(')')
                irr = x[l+1:r]
                irr *= 20
            return float(x[:l] + irr)
        return math.isclose(parse(s), parse(t))

            