---
date: 2023-07-11
difficulty: Easy
num: 268
related_topics:
  - Array
  - Binary Search
  - Bit Manipulation
  - Hash Table
  - Math
  - Sorting
return: Done
---

# Problem: 268. Missing Number

## Description
The problem was to find the missing element in an array nums, given that the number of elements, [0,n] was the range.

## Approach / Thoughts
My approach was originally to sort the array and find the missing number, but due to many other conditions, I ended up trying to have to brute force the solution,

## Solution
```java
class Solution {
    public int missingNumber(int[] nums) {
        
        int range = nums.length;

        Arrays.sort(nums);

        if (nums.length == 1 && nums[0] != 0) {
            return 0;
        }
        if (nums.length == 1 && nums[0] == 0) {
            return 1;
        }


        if (nums[range - 1] == range-1) {
            return range;
        }

        for (int i = 0; i < nums.length - 1; i++){
            if (nums[i] + 1 != nums[i+1]) {
                return nums[i] + 1;
            }
        }

        if (nums[0] != 0) {
            return 0;
        }

        return -1;
    }
}
```
