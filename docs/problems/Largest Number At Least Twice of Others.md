---
date: 2023-07-29
difficulty: Easy
num: 747
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 747. Largest Number At Least Twice Of Others

## Description
To find the max element and its index. If the max element was greater than two times all the other elements individually, return the index. Otherwise, return -1.

## Approach / Thoughts
To use loops to find the max element using Math.max as well as the index of the max element. Then use another loop to find out if there were any cases where the number did not meet the condition.

## Solution
```java
class Solution {
    public int dominantIndex(int[] nums) {
        int maxIndex = 0;
        int maxNum = 0;

        for (int i : nums) {
            maxNum = Math.max(maxNum, i);
        }

        for (int j = 0; j < nums.length; j++) {
            if (nums[j] == maxNum) {
                maxIndex = j;
            }
        }

        for (int k = 0; k < nums.length; k++) {
            if (2*nums[k] > maxNum && k != maxIndex) {
                return -1;
            }
        }
        return maxIndex;
    }
}
```
