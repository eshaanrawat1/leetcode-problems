---
date: 2025-03-25
difficulty: Medium
num: 1234
related_topics:
  - Sliding Window
  - String
return: Review
---

# Problem: 1234. Replace The Substring For Balanced String

## Description
same, balanced string with only 4 characters, each char appear n/4 times

## Approach / Thoughts
binary search on possible substring lengths

see max amount of characters to take from, either all we have, or enough so we keep target

## Solution
```python
class Solution:
    def balancedString(self, s: str) -> int:
        n = len(s)
        target = n // 4

        freq = Counter(s)
        need = [(c, target-freq[c]) for c in 'QWER' if freq[c] < target]
        if not need:
            return 0


        def check(cur):
            total_need = sum(x[1] for x in need)
            for c in cur:
                if freq[c] > target:
                    cur_have = min(cur[c], freq[c]-target)
                    total_need -= cur_have
            return total_need <= 0


        def balance(threshold):
            cur = Counter()
            for i in range(threshold):
                cur[s[i]] += 1

            if check(cur):
                return True

            j = 0
            for i in range(threshold, n):
                cur[s[i]] += 1
                cur[s[j]] -= 1
                j += 1

                if check(cur):
                    return True

            return False


        l, r = 1, n-1
        res = -1

        while l <= r:
            m = (l + r) // 2
            if balance(m):
                r = m - 1
                res = m
            else:
                l = m + 1
        return res
```
