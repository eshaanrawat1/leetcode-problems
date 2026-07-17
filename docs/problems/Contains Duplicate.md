---
date: 2023-07-10
difficulty: Easy
num: 217
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 217. Contains Duplicate

## Description

## Approach / Thoughts

## Solution
```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i ++) {
            if (nums[i] == nums[i+1]) {
                return true;
            }
        }
        return false;
    }
    
}
```
