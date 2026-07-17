---
date: 2026-02-28
difficulty: Hard
num: 3093
related_topics:
  - Array
  - Senior Staff
  - String
  - Trie
return: Review
---

# Problem: 3093. Longest Common Suffix Queries

## Description

## Approach / Thoughts
reverse words, binary search for range

sqrt decomp for min / best idx in blocks in range

## Solution
```python
class SqrtDecomp:
    def __init__(self, n, wc):
        self.n = n
        self.wc = wc

        self.block_size = int(sqrt(n))
        self.num_blocks = ceil(n / self.block_size)
        self.blocks = [[(inf, inf)] * self.block_size for _ in range(self.num_blocks)]

        wc_idx = 0
        for b in self.blocks:   
            for i in range(len(b)):
                if wc_idx >= n:
                    break
                b[i] = (len(wc[wc_idx][0]), wc[wc_idx][1])
                wc_idx += 1


        self.min_block = [(inf, inf) for _ in range(self.num_blocks)] 
        for i, b in enumerate(self.blocks):
            for l, idx in b:
                if (l, idx) < self.min_block[i]:
                    self.min_block[i] = (l, idx)

        self.abs_min = min(self.min_block)[1]


    def calc_min(self, l, r):
        l_block_start = l // self.block_size
        l_block_end = l_block_start * self.block_size + self.block_size
        l_start = l - (l_block_start * self.block_size)

        r_block_start = r // self.block_size
        r_start = r - (r_block_start * self.block_size)

        res = (inf, inf) 

        if l_block_start == r_block_start:
            for i in range(l_start, r_start):
                res = min(res, self.blocks[l_block_start][i])
            return res[1]

        for i in range(l_start, self.block_size):
            res = min(res, self.blocks[l_block_start][i])

        for i in range(0, r_start):
            res = min(res, self.blocks[r_block_start][i])

        for b in range(l_block_start+1, r_block_start):
            res = min(res, self.min_block[b])
        return res[1]


class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        wc = [(w[::-1], i) for i,w in enumerate(wordsContainer)]
        wq = [(w[::-1], i) for i,w in enumerate(wordsQuery)]
        m = len(wc)

        wc.sort()
        sqd = SqrtDecomp(m, wc)

        res = []
        for rw, _ in wq:
            bl = br = 0
            for k in range(len(rw), -1, -1):
                pre = rw[:k]
                l = bisect_left(wc, (pre, -1))
                r = bisect_left(wc, (pre+'{', -1))
                
                if l < r:
                    bl, br = l, r
                    break

            if bl >= br:
                res.append(sqd.abs_min)
            else:
                res.append(sqd.calc_min(bl, br))
        return res
```
