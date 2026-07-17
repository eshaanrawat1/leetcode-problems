---
date: 2024-04-05
difficulty: Medium
num: 1963
related_topics:
  - Greedy
  - Stack
  - String
  - Two-Pointer
return: Done
---

# Problem: 1963. Minimum Number Of Swaps To Make The String Balanced

## Description
Same as title

## Approach / Thoughts
Count max negative difference (min) and divide it by 2 since swap fixes two

## Solution
```python
class Solution:
    def minSwaps(self, s: str) -> int:
        cnt = ans = 0

        for ch in s:
            if ch == '[': cnt += 1
            if ch == ']': cnt -= 1

            ans = min(cnt, ans)
        return (-ans + 1) // 2
```
