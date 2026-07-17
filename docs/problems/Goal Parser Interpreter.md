---
date: 2024-02-22
difficulty: Easy
num: 1678
related_topics:
  - String
return: Done
---

# Problem: 1678. Goal Parser Interpreter

## Description
Replace symbols

## Approach / Thoughts
.replace

## Solution
```python
class Solution:
    def interpret(self, command: str) -> str:
        return command.replace('()', 'o').replace('(al)', 'al')
```
