---
date: 2026-05-28
difficulty: Hard
num: 3943
related_topics:
  - 
return:
---

# Problem: 3943. Number of Pairs After Increment

## Description
You are given two integer arrays `nums1` and `nums2`, and a 2D integer array `queries`.

Each `queries[i]` is one of the following types:

	`[1, x, y, val]` – **Add** `val` to every element in `nums2[x..y]`.

	`[2, tot]` – **Compute** the number of pairs `(j, k)` such that `nums1[j] + nums2[k] == tot`.

Return an integer array `answer`, where `answer[j]` is the number of pairs for the `jth` query of type 2.

## Approach / Thoughts
[[Weekly Contest 503]]

**upsolve**

sqrt decomp - hard part is implementation
use freq map for each block 
since increments, we just use prefix trick - `tot - v - i`
- where tot is what we are trying to find
- v is each value in nums1 array (limited to 5 elements so it works)
- i is the increment already seen 

tricky handling of 
- same block - do a full reset for inc and current val 
- different blocks / blocks in between - add it to inc

## Solution
```python
class SqrtDecomp:

    def __init__(self, nums):
        self.n = len(nums)
        self.nums = nums

        self.root = int(sqrt(self.n))

        self.num_blocks = ceil(self.n / self.root)+1
        self.block_size = self.root
        self.blocks = [[] for _ in range(self.num_blocks)]

        self.block_freq = []
        self.inc_freq = []

        for i in range(self.n):
            block_idx = i // self.root
            self.blocks[block_idx].append(self.nums[i])

        for b in self.blocks:
            self.block_freq.append(Counter(b))
            self.inc_freq.append(0)


    def query(self, nums1, tot):
        res = 0
        for v in nums1:
            for i, _ in enumerate(self.blocks):
                freq = self.block_freq[i]
                res += freq[tot - v - self.inc_freq[i]]
        return res


    def update(self, l, r, val):
        l_block = l // self.block_size
        r_block = r // self.block_size

        if l_block == r_block:
            for i in range(min(self.block_size, len(self.blocks[l_block]))):
                self.blocks[l_block][i] += self.inc_freq[l_block]
                j = i + (l_block * self.block_size)
                if l <= j <= r:
                    self.blocks[l_block][i] += val
                
            self.block_freq[l_block] = Counter(self.blocks[l_block])
            self.inc_freq[l_block] = 0
            return

        for i in range(min(self.block_size, len(self.blocks[l_block]))):
            self.blocks[l_block][i] += self.inc_freq[l_block]
            j = i + (l_block * self.block_size)
            if j >= l:
                self.blocks[l_block][i] += val

        for i in range(min(self.block_size, len(self.blocks[r_block]))):
            self.blocks[r_block][i] += self.inc_freq[r_block]
            j = i + (r_block * self.block_size)
            if j <= r:
                self.blocks[r_block][i] += val

        self.block_freq[l_block] = Counter(self.blocks[l_block])
        self.block_freq[r_block] = Counter(self.blocks[r_block])

        self.inc_freq[l_block] = 0
        self.inc_freq[r_block] = 0

        for block_idx in range(l_block+1, r_block):
            self.inc_freq[block_idx] += val



class Solution:
    def numberOfPairs(self, nums1, nums2, queries):
        sd = SqrtDecomp(nums2)
        
        res = []
        for q in queries:
            if len(q) == 4:
                _, x, y, val = q
                sd.update(x, y, val)
            else:
                _, tot = q
                res.append(sd.query(nums1, tot))
        return res
```