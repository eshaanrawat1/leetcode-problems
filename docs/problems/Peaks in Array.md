---
date: 2026-01-18
difficulty: Hard
num: 3187
related_topics:
  - Array
  - Binary Indexed Tree
  - Segment Tree
return: Done
---

# Problem: 3187. Peaks In Array

## Description
same, but can update numbers

## Approach / Thoughts
prefix sum + sqrt decomp for peak blocks

minor optimization on peak array

## Solution
```python
class SQDecomp:
    def __init__(self, nums):
        self.n = len(nums)
        self.nums = nums

        self.is_peak = [0] * self.n
        self.block_size = int(sqrt(self.n))
        self.blocks = [[] for _ in range(self.block_size+2)]
        
        for i, x in enumerate(nums):
            if i != 0 and i != self.n-1:
                if (self.nums[i-1] < self.nums[i] and self.nums[i] > self.nums[i+1]):
                    self.is_peak[i] = 1

            block_idx = i // self.block_size
            self.blocks[block_idx].append(self.is_peak[i])

        for b in self.blocks:
            for i in range(1, len(b)):
                b[i] += b[i-1]

    
    def recalc(self, block_idx):
        b = self.blocks[block_idx]
        cnt = 0

        real_idx = block_idx * self.block_size
        for j in range(real_idx, min(self.n, real_idx+self.block_size)):
            if cnt > 0:
                b[cnt] = self.is_peak[j] + b[cnt-1]
            else:
                b[cnt] = self.is_peak[j]
            cnt += 1


    def update_peak(self, idx):
        if 0 < idx < self.n-1 and (self.nums[idx-1] < self.nums[idx] and self.nums[idx] > self.nums[idx+1]):
            self.is_peak[idx] = 1 
        else:
            self.is_peak[idx] = 0
    
    def update(self, idx, val):
        to_recalc = set()
        self.nums[idx] = val


        l = idx - 1
        r = idx + 1

        self.update_peak(idx)
        if 0 <= l < self.n: self.update_peak(l)
        if 0 <= r < self.n: self.update_peak(r)
            

        if 0 <= l < self.n:
            l_block_idx = l // self.block_size
            to_recalc.add(l_block_idx)

        if 0 <= r < self.n:
            r_block_idx = r // self.block_size
            to_recalc.add(r_block_idx)

        m_block_idx = idx // self.block_size
        to_recalc.add(m_block_idx)

        for i in to_recalc:
            self.recalc(i)


    def calc_prefix(self, l, r):
        if (r-l+1) <= 2:
            return 0

        r -= 1

        l_block_idx = l // self.block_size
        l_block_offset = l % self.block_size
       
        r_block_idx = r // self.block_size
        r_block_offset = r % self.block_size

        if l_block_idx == r_block_idx:
            cur_sum = 0
            for j in range(l+1, r+1):
                cur_sum += self.is_peak[j]
            return cur_sum

        l_sum = self.blocks[l_block_idx][-1] - self.blocks[l_block_idx][l_block_offset]
        r_sum = self.blocks[r_block_idx][r_block_offset]
        
        cur_sum = l_sum + r_sum
        for block_idx in range(l_block_idx+1, r_block_idx):
            cur_sum += self.blocks[block_idx][-1]
        return cur_sum



class Solution:
    def countOfPeaks(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        sd = SQDecomp(nums)
        
        res = []
        for t, x, y in queries:
            if t == 1:
                res.append(sd.calc_prefix(x, y))
            else:
                sd.update(x, y)
        return res
```
