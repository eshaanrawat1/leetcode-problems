---
date: 2026-04-28
difficulty: Medium
num: 384
related_topics:
  - Array
  - Math
  - Design
  - Randomized
return:
---

# Problem:  

## Description
Given an integer array `nums`, design an algorithm to randomly shuffle the array. All permutations of the array should be **equally likely** as a result of the shuffling.

Implement the `Solution` class:

- `Solution(int[] nums)` Initializes the object with the integer array `nums`.
- `int[] reset()` Resets the array to its original configuration and returns it.
- `int[] shuffle()` Returns a random shuffling of the array.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
fisher yates -> calc probabilities from end to start

## Solution
```python
class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums
        

    def reset(self) -> List[int]:
        return self.nums
        

    def shuffle(self) -> List[int]:
        n = len(self.nums)

        cpy = self.nums[:]
        for i in range(n-1, 0, -1):
            j = random.randint(0, i)
            cpy[i], cpy[j] = cpy[j], cpy[i]
        return cpy
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()