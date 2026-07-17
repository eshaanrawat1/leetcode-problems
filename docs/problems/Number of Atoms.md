---
date: 2024-07-14
difficulty: Hard
num: 726
related_topics:
  - Hash Table
  - Sorting
  - Stack
  - String
return: Review
---

# Problem: 726. Number Of Atoms

## Description

## Approach / Thoughts
stack to keep track of multipliers

get portions of atoms with looping

## Solution
```python
class Solution:
    def countOfAtoms(self, formula: str) -> str:
        muls, running_mul = [], 1
        stack = [1]

        index = len(formula)-1
        cur_number = ""
        while index >= 0:
            if formula[index].isdigit():
                cur_number += formula[index]
            elif formula[index].isalpha():
                cur_number = ""
            elif formula[index] == ')':
                cur_multiplier = int(cur_number[::-1]) if cur_number else 1
                running_mul *= cur_multiplier
                
                stack.append(cur_multiplier)
                cur_number = ""
            elif formula[index] == '(':
                running_mul //= stack.pop()
                cur_number = ""

            muls.append(running_mul)
            index -= 1

        muls = muls[::-1]
        counts = defaultdict(int)

        index = 0
        while index < len(formula):
            if formula[index].isupper():
                cur_atom = formula[index]
                cur_count = ""
                index += 1

                while index < len(formula) and formula[index].islower():
                    cur_atom += formula[index]
                    index += 1

                while index < len(formula) and formula[index].isdigit():
                    cur_count += formula[index]
                    index += 1

                if cur_count:
                    counts[cur_atom] += int(cur_count) * muls[index-1]
                else:
                    counts[cur_atom] += 1 * muls[index-1]
            else:
                index += 1
        return "".join(k + str(v > 1 and v or "") for k, v in sorted(counts.items()))
```
