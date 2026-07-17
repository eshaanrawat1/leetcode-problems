---
date: 2023-07-30
difficulty: Easy
num: 561
related_topics:
  - Array
  - Counting Sort
  - Greedy
  - Sorting
return: Done
---

# Problem: 561. Array Partition

## Description
The problem was to find all possible pairs of two numbers in an array. Then, take the minimum value of each pair to add up to the maximum sum.

## Approach / Thoughts
My approach was to sort the array using the built in sort method in java. If we are taking only the smallest element of each pair, it would make no sense for example to pair the smallest element with the largest element. Once the array is sorted, we can intuitively see that we should pair the elements with the adjacent ones to avoid wasting numbers.

## Solution
```java
class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);
        int ans = 0;
        for (int i = 0; i < nums.length; i += 2) {
            ans += nums[i];
        }
        return ans;
    }
}
```
