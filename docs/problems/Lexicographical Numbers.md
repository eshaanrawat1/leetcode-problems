---
date: 2024-09-20
difficulty: Medium
num: 386
related_topics:
  - DFS
  - Trie
return: Done
---

# Problem: 386. Lexicographical Numbers

## Description
same n time and constant space

## Approach / Thoughts
follow pattern of tree, use input constraints to build it

## Solution
```python
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res = [0] * n

        def fill(start_digit, idx):
            if idx >= len(res):
                return 

            while idx < len(res) and res[idx] != 0:
                idx += 1

            ones = start_digit
            tens = 10 * start_digit
            hund = 100 * start_digit
            thou = 1000 * start_digit
            tentho = 10000 * start_digit

            if idx >= len(res):
                return 

            res[idx] = ones
            idx += 1

            for _ in range(10):
                if idx >= len(res) or tens > n:
                    break 
                res[idx] = tens
                tens += 1
                idx += 1

                for _ in range(10):
                    if idx >= len(res) or hund > n:
                        break 
                    res[idx] = hund
                    hund += 1
                    idx += 1

                    for _ in range(10):
                        if idx >= len(res) or thou > n:
                            break
                        res[idx] = thou
                        thou += 1
                        idx += 1

                        for _ in range(10):
                            if idx >= len(res) or tentho > n:
                                break 
                            res[idx] = tentho
                            tentho += 1
                            idx += 1

            
        

        for i in range(1, 10):
            fill(i, 0)
        return res
```
