---
date: 2025-03-20
difficulty: Medium
num: 3484
related_topics:
  - Array
  - Design
  - Hash Table
  - Matrix
  - String
return: Done
---

# Problem: 3484. Design Spreadsheet

## Description
same, simulate excel sheets

## Approach / Thoughts
use 2d array account for indices and addition cases

## Solution
```python
class Spreadsheet:

    def __init__(self, rows: int):
        self.cells = [[0] * 26 for _ in range(rows)]

    def setCell(self, cell: str, value: int) -> None:
        letter = cell[0]
        num = int(cell[1:]) - 1

        self.cells[num][ord(letter) - ord('A')] = value
        

    def resetCell(self, cell: str) -> None:
        letter = cell[0]
        num = int(cell[1:]) - 1

        self.cells[num][ord(letter) - ord('A')] = 0

    def _has_letter(self, part):
        for c in part:
            if ord('A') <= ord(c) <= ord('Z'):
                return True
        return False
        

    def getValue(self, formula: str) -> int:
        first, second = formula[1:].split('+')
        
        if self._has_letter(first):
            l = first[0]
            n = int(first[1:]) - 1
            v1 = self.cells[n][ord(l) - ord('A')]
        else:
            v1 = int(first)

        if self._has_letter(second):
            l = second[0]
            n = int(second[1:]) - 1
            v2 = self.cells[n][ord(l) - ord('A')]
        else:
            v2 = int(second)

        return v1 + v2


# Your Spreadsheet object will be instantiated and called as such:
# obj = Spreadsheet(rows)
# obj.setCell(cell,value)
# obj.resetCell(cell)
# param_3 = obj.getValue(formula)
```
