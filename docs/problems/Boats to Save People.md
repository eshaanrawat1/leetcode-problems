---
date: 2024-05-03
difficulty: Medium
num: 881
related_topics:
  - Array
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 881. Boats To Save People

## Description
boats to save people

boats can carry two people ≤ weight

## Approach / Thoughts
greedy pair heaviest with lightest

sort with two pointers

## Solution
```python
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()

        num_boats = 0
        l, r = 0, len(people)-1
        while l <= r:
            weight = people[l] + people[r]

            # if l == r we need to subtract weight
            if l == r:
                weight -= people[l]

            # if in limit, move both pointers add boat
            if weight <= limit:
                l += 1
                r -= 1
                num_boats += 1
            # if not, move the right pointer, make it its own boat
            else:
                r -= 1
                num_boats += 1
        return num_boats
```
