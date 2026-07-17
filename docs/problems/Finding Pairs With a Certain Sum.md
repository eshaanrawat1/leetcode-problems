---
date: 2025-07-06
difficulty: Medium
num: 1865
related_topics:
  - Array
  - Design
  - Hash Table
return: Done
---

# Problem: 1865. Finding Pairs With A Certain Sum

## Description
same, similar to two sum

## Approach / Thoughts
two sum style approach - update on changes

## Solution
```python
class FindSumPairs:

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1 = nums1
        self.nums2 = nums2

        self.N1 = len(nums1)
        self.N2 = len(nums2)

        self.cnt = Counter(nums2)

    def add(self, index: int, val: int) -> None:
        old_val = self.nums2[index]
        self.cnt[old_val] -= 1

        self.nums2[index] += val

        new_val = self.nums2[index]
        self.cnt[new_val] += 1

    def count(self, tot: int) -> int:
        res = 0
        for n in self.nums1:
            res += self.cnt[tot-n]
        return res
        


# Your FindSumPairs object will be instantiated and called as such:
# obj = FindSumPairs(nums1, nums2)
# obj.add(index,val)
# param_2 = obj.count(tot)
```
