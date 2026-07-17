---
date: 2023-07-23
difficulty: Easy
num: 905
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 905. Sort Array By Parity

## Description
To sort an array so that evens are at the beginning and odd nums at the end.

## Approach / Thoughts
Use two pointers to swap even and odd elements.

## Solution
```java
class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int left = 0; 
        int right = nums.length - 1; 
        int temp = 0;
        while (left < right) {
            if (nums[left] % 2 != 0 && nums[right] % 2 != 0) {
                right--;
            }
            else if (nums[left] % 2 != 0) {
                temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            }
            else {
                left++;
            }
        }
        return nums;
    }
}
```
