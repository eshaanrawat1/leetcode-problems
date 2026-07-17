---
date: 2026-06-20
difficulty: Medium
num: 1156
related_topics:
  - Hash Table
  - String
  - Sliding Window
return:
---

# Problem: 1156. Swap For Longest Repeated Character Substring

## Description
You are given a string `text`. You can swap two of the characters in the `text`.

Return *the length of the longest substring with repeated characters*.

## Approach / Thoughts
join groups of repeated characters - see possible cases for joining
- aaabaaa - see if we have a replacement a to fill
- aaabbbaaa - see if we can fill either left side or right side
- handle case of individual group like s = aaa

## Solution
```python
class Solution:
    def maxRepOpt1(self, s: str) -> int:

        n = len(s)
        i = res = 0

        groups = []

        while i < n:
            j = i
            cnt = 0

            while j < n and s[i] == s[j]:
                j += 1
                cnt += 1

            groups.append((s[i], cnt))
            res = max(res, cnt)
            i = j

        freq = Counter(s)

        for i in range(1, len(groups)-1):
            c, cc = groups[i]
            pr, pc = groups[i-1]
            nx, nc = groups[i+1]

            if cc == 1:
                if pr == nx:
                    av = freq[pr] - pc - nc > 0
                    res = max(res, pc + nc + av)

            av1 = freq[pr] - pc > 0
            av2 = freq[nx] - nc > 0
            res = max(res, pc + av1, nc + av2)
                
        return res
```