---
date: 2024-01-16
difficulty: Medium
num: 150
related_topics:
  - Array
  - Math
  - Stack
return: Done
---

# Problem: 150. Evaluate Reverse Polish Notation

## Description
Evaluate RPN where operators come after operands: (2, 3, +) = 5

## Approach / Thoughts
Use a stack, append all numbers. If we hit an operation, pop once and conduct the operation. Replace the stack number with whatever the operation yields. By the end of the operations, the stack will contain the final number.

## Solution
```python
import math
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for ch in tokens:
            if ch == '+':
                a,b = int(stack.pop()), int(stack[-1])
                stack[-1] = str(b + a)
            elif ch ==  '-':
                a,b = int(stack.pop()), int(stack[-1])
                stack[-1] = str(b - a)
            elif ch == '*':
                a,b = int(stack.pop()), int(stack[-1])
                stack[-1] = str(b * a)   
            elif ch == '/':
                a,b = int(stack.pop()), int(stack[-1])
                stack[-1] = str(math.trunc(b / a))
            else:
                stack.append(ch)    
        return int(stack[0])
```
