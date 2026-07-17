---
date: 2026-05-28
difficulty: Medium
num: 3941
related_topics:
  - 
return:
---

# Problem: 3941. Password Strength

## Description
You are given a string `password`.

The **strength** of the password is calculated based on the following rules:

	1 point for each distinct lowercase letter (`'a'` to `'z'`).

	2 points for each distinct uppercase letter (`'A'` to `'Z'`).

	3 points for each distinct digit (`'0'` to `'9'`).

	5 points for each distinct special character from the set `"!@#$"`.

Each character contributes **at most** once, even if it appears multiple times.

Return an integer denoting the strength of the password.

## Approach / Thoughts
[[Weekly Contest 503]]

check sets - conditions
## Solution
```python
class Solution:
    def passwordStrength(self, password: str) -> int:
        lower = {chr(i+97) for i in range(26)}
        upper = {chr(i+65) for i in range(26)}
        dig = {str(c) for c in range(10)}
        special = '!@#$'

        seen = set()
        res = 0

        for c in password:
            if c in seen:
                continue
                
            if c in lower:
                res += 1
            elif c in upper:
                res += 2
            elif c in dig:
                res += 3
            elif c in special:
                res += 5
            seen.add(c)
        return res
```