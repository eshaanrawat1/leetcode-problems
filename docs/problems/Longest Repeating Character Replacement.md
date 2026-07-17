---
date: 2024-02-12
difficulty: Medium
num: 424
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 424. Longest Repeating Character Replacement

## Description
Find the length of the maximum substring possible after k replacements. All characters are uppercase letters.

## Approach / Thoughts
Use sliding window left and right pointers. Have a dict to count freq of each letter in the substring. Take the most freq letter in any given substring and find out if we can make all other letters the same (is the size of the window - freq of most ≤ k).

If it is, store max window size and continue

Else move left pointer and decrement count of s[l]

## Solution
```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l, cur_max = 0, 0
        counts = collections.defaultdict(int)

        for r in range(len(s)):
            counts[s[r]] += 1

            while True:
                max_count = 0
                for val in counts.values():
                    if val > max_count:
                        max_count = val

                sz = r - l + 1
                if sz - max_count <= k:
                    cur_max = max(cur_max, sz)
                    break
                else:
                    counts[s[l]] -= 1
                    l += 1

        return cur_max
```
