---
date: 2024-08-31
difficulty: Medium
num: 187
related_topics:
  - Bit Manipulation
  - Hash Function
  - Hash Table
  - Rolling Hash
  - Sliding Window
  - String
return: Done
---

# Problem: 187. Repeated Dna Sequences

## Description
count 10 length substrings duplicate

## Approach / Thoughts
rabin karp

## Solution
```python
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        if len(s) < 10:
            return []

        res = []

        def rabin_karp():
            A = [ord(c) - ord('a') for c in s]
            mod = (1 << 31) - 1

            count = defaultdict(int)
            visit = defaultdict(list)

            p = pow(26, 10, mod)
            l = rh = 0
            for i in range(10):
                rh = (rh * 26 + A[i]) % mod

            count[rh] += 1
            visit[rh].append(0)

            for r in range(10, len(s)):
                rh = (rh * 26 + A[r] - A[l] * p) % mod
                l += 1

                if count[rh] == 1:
                    cur = s[l:r+1]

                    for j in visit[rh]:
                        if cur == s[j:j+10]:
                            res.append(cur)
                            break
                
                count[rh] += 1
                visit[rh].append(l)
        
        rabin_karp()
        return res           
```
