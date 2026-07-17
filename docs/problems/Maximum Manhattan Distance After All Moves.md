---
date: 2026-06-28
difficulty: Medium
num: 3968
related_topics:
  - 
return:
---

# Problem: 3968. Maximum Manhattan Distance After All Moves

## Description
You are given a string `moves` consisting of the characters `'U'`, `'D'`, `'L'`, `'R'`, and `'_'`.

Starting from the origin `(0, 0)`, each character represents one move on a 2D plane:

	- `'U'`: Move up by 1 unit.

	- `'D'`: Move down by 1 unit.

	- `'L'`: Move left by 1 unit.

	- `'R'`: Move right by 1 unit.

	- `'_'`: Can be independently replaced with any one of `'U'`, `'D'`, `'L'`, or `'R'`.

Return the maximum **Manhattan distance** from the origin that can be achieved after all moves have been performed.

## Approach / Thoughts
[[Weekly Contest 507]]

all _ should be the same value - since order of moves doesn't matter 

## Solution
```python
class Solution:
    def maxDistance(self, moves: str) -> int:
        start = [0, 0]
        cnt = 0


        for c in moves:
            if c == 'U':
                start[1] += 1
            elif c == 'D':
                start[1] -= 1
            elif c == 'L':
                start[0] += 1
            elif c == 'R':
                start[0] -= 1
            else:
                cnt += 1

        return abs(start[0]) + abs(start[1]) + cnt
```