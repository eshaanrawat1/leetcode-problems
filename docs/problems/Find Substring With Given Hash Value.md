---
date: "2026-06-29"
difficulty: "Hard"
rating: 2063
num: "2156"
related_topics:
  - "string"
  - "sliding-window"
  - "rolling-hash"
  - "hash-function"
return:
---

# Problem: 2156. Find Substring With Given Hash Value

## Approach / Thoughts

use rolling hash with a fixed size sliding window
major difference is that modulo isn't always prime in this - so finding the modular inverse is tricky
- if we go from left to right, we have to divide the current polynomial state by p each time - requires finding the mod inv to do that safely after modding 
- if we go from right to left, we multiply by p -> which is much easier than finding mod inv -> we go from right to left, subtracting rval with max power (use + mod for safety) then add lval alone since power is 0

## Solution

```python
class Solution:
    def subStrHash(self, s, p, mod, k, hashValue) -> str:
        n = len(s)
        pk = pow(p, k-1, mod)
        
        res = ""

        h = j = 0
        for i in range(n-1, n-k-1, -1):
            val = ord(s[i]) - ord('a') + 1
            h = h + val * pow(p, k-j-1, mod)
            h %= mod
            j += 1

        if h == hashValue:
            res = s[n-k:]

        for i in range(n-k-1, -1, -1):
            rval = ord(s[i+k]) - ord('a') + 1
            h = (h - rval * pk + mod) % mod

            h = h * p % mod

            lval = ord(s[i]) - ord('a') + 1
            h = (h + lval) % mod

            if h == hashValue:
                res = s[i:i+k] 
        return res
```
