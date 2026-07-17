---
date: 2023-08-01
difficulty: Easy
num: 1920
related_topics:
  - Array
  - Simulation
return: Done
---

# Problem: 1920. Build Array From Permutation

## Description
To make it so a new array had values where arr[i] = nums[nums[i]].

## Approach / Thoughts
Not really sure, the solution was in the problem, I just traversed through the loop and assigned values accordingly.

## Solution
```java
class Solution {
    public int[] buildArray(int[] nums) {
        int[] ans = new int[nums.length];
        for (int i = 0; i < ans.length; i++){
            ans[i] = nums[nums[i]];
        }
        return ans;
    }
}
```
