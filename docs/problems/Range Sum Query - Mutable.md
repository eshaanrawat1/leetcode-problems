---
date: 2024-10-27
difficulty: Medium
num: 307
related_topics:
  - Array
  - Binary Indexed Tree
  - Design
  - Segment Tree
return: Review
---

# Problem: 307. Range Sum Query   Mutable

## Description

## Approach / Thoughts
fenwick tree for mutable updates - 1 indexed

black box - review

## Solution
```python
class BIT:
    def __init__(self, nums):
        self.nums = [0] * (len(nums) + 1)

        for i, n in enumerate(nums):
            self.update(i + 1, n)

    def update(self, i, k):
        while i < len(self.nums):
            self.nums[i] += k
            i += i & -i

    def query(self, i):
        res = 0
        while i > 0:
            res += self.nums[i]
            i -= i & -i
        return res

class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.b = BIT(nums)

    def update(self, index: int, val: int) -> None:
        diff = val - self.nums[index]
        self.nums[index] = val
        self.b.update(index + 1, diff)

    def sumRange(self, left: int, right: int) -> int:
        return self.b.query(right + 1) - self.b.query(left)


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)


# seg tree solution
class SegmentTree:
    def __init__(self, nums):
        self.n = len(nums)
        self.nums = nums

        self.tree = [0] * (4 * self.n)
        self._build(0, 0, self.n-1)

    
    def _build(self, i, l, r):
        if l == r:
            self.tree[i] = self.nums[l]
            return self.tree[i]

        mid = (l + r) // 2

        u = self._build(2*i+1, l, mid)
        v = self._build(2*i+2, mid+1, r)

        self.tree[i] = u+v
        return self.tree[i]


    def _range_max(self, i, l, r, ql, qr):
        if ql <= l and r <= qr:
            return self.tree[i]

        if r < ql or l > qr:
            return 0

        mid = (l + r) // 2

        u = self._range_max(2*i+1, l, mid, ql, qr)
        v = self._range_max(2*i+2, mid+1, r, ql, qr)
        return u + v


    def query(self, ql, qr):
        return self._range_max(0, 0, self.n-1, ql, qr)


    def _dfs(self, i, l, r, idx, val):
        if l == r:
            self.tree[i] = val
            return 

        mid = (l + r) // 2
        if l <= idx <= mid:
            self._dfs(2*i+1, l, mid, idx, val)
        else:
            self._dfs(2*i+2, mid+1, r, idx, val)

        self.tree[i] = self.tree[2*i+1] + self.tree[2*i+2]


    def update(self, idx, val):
        self.nums[idx] = val
        self._dfs(0, 0, self.n-1, idx, val)


class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.st = SegmentTree(nums)
        

    def update(self, index: int, val: int) -> None:
        self.st.update(index, val)
        

    def sumRange(self, left: int, right: int) -> int:
        return self.st.query(left, right)
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
```
