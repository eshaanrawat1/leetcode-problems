---
date: 2023-07-20
difficulty: Easy
num: 485
related_topics:
  - Array
return: Done
---

# Problem: 485. Max Consecutive Ones

## Description
The problem was to find the maximum number of consecutive ones.

## Approach / Thoughts
My approach was to have a counter to increment when there was a 1. That counter would reset when there is a 0 and compare itself to another int. If it was larger, that storage int would become the count.

## Solution
```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        
        int count = 0;
        int maxC = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                count++;
            }
            else {  
                count = 0;
            }
            maxC = Math.max(maxC, count);
        }
        return maxC;
    }
}
```
