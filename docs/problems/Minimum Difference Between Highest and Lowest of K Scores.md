---
date: 2023-08-10
difficulty: Easy
num: 1984
related_topics:
  - Array
  - Sliding Window
  - Sorting
return: Done
---

# Problem: 1984. Minimum Difference Between Highest And Lowest Of K Scores

## Description
To find the difference between the highest and lowest of k scores.

Ex: [1,2,3,4] k = 2

Of all the 2 number pairs, we find the pair that has the minimum difference.

## Approach / Thoughts
My approach was to use a slide approach which is similar to a sliding window. We basically start and index k and consider the difference between that index and the index which is the appropriate number of spaces behind it. This only works in a sorted array because the minimum difference has to be one of those constant pairs.

For example if k = 2 and the array is length 7 - initial index is 1 - (i-k+1) which is 0.

Then we would store the min value of all of these.

## Solution
```java
class Solution {
    public int minimumDifference(int[] nums, int k) {
        Arrays.sort(nums);
        int currMin = Integer.MAX_VALUE;

        if (nums.length == 1) {return 0;}
        for (int i = k-1; i < nums.length; i++) {
            currMin = Math.min(currMin, nums[i] - nums[i-k+1]);
        }
        return currMin;
    }
}
```
