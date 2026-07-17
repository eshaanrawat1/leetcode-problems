---
date: 2024-10-19
difficulty: Hard
num: 1106
related_topics:
  - Recursion
  - Stack
  - String
return: Review
---

# Problem: 1106. Parsing A Boolean Expression

## Description

## Approach / Thoughts
regex with eval

## Solution
```python
class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        def LOGOR(*args):
            return any(args)
        def LOGAND(*args):
            return all(args)

        expression = expression.replace('t', "True")
        expression = expression.replace('f', "False")
        expression = expression.replace('!', "not")
        expression = expression.replace('&', "LOGAND")
        expression = expression.replace('|', "LOGOR")

        return eval(expression)
```
