---
date: 2023-07-18
difficulty: Easy
num: 283
related_topics:
  - Array
  - Two-Pointer
return: Done
---

# Problem: 283. Move Zeroes

## Description
The problem was given an array, move the zeroes to the end of the array while leaving the order of the other variables unchanged.

## Approach / Thoughts
I looked at the solution and copied that.

## Solution
```java
class Solution {
    public void moveZeroes(int[] nums) {
        
        int sn = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i]==0) {
                sn++;
            }
            else if (sn > 0) {
                int t = nums[i];
                nums[i] = 0;
                nums[i-sn] = t;
            }
        }

    }
}
```
