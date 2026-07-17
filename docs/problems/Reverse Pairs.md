---
date: 2024-09-11
difficulty: Hard
num: 493
related_topics:
  - Array
  - Binary Indexed Tree
  - Binary Search
  - Divide and Conquer
  - Merge Sort
  - Segment Tree
return: Done
---

# Problem: 493. Reverse Pairs

## Description
count pairs where i < j and nums[i] > 2 * nums[j]

## Approach / Thoughts
merge sort - reason it works is when sorted, we can count greater than pairs easy in linear time

always works since left and right have indices less than each other

## Solution
```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        self.count = 0

        def count_pairs(left, right):
            i = j = pairs = 0

            while i < len(left) and j < len(right):
                while  j < len(right) and left[i] > 2 * right[j]:
                    j += 1
                pairs += j
                i += 1

            if i < len(left):
                pairs += (len(left) - i) * j
            self.count += pairs

        def merge(left, right):
            count_pairs(left, right)

            i = j = 0
            res = []
            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    res.append(left[i])
                    i += 1
                else:
                    res.append(right[j])
                    j += 1
            
            res += left[i:]
            res += right[j:]

            return res

        def mergeSort(nums):
            if len(nums) == 1:
                return nums[:]

            m = (len(nums)) // 2

            left = mergeSort(nums[:m])
            right = mergeSort(nums[m:])

            return merge(left, right)

        mergeSort(nums)
        return self.count
```
