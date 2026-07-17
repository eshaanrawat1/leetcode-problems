---
date: 2023-07-20
difficulty: Medium
num: 713
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 713. Subarray Product Less Than K

## Description
This problem was pretty fun. The problem was to find the max number of subarrays, which are continuous arrays inside of the array, where the product was less than a target number k.

## Approach / Thoughts
My approach to the problem was to use the sliding window technique. This involves a combination of two pointers sort of. There is a left and a right. Using a loop, the right keeps expanding until the condition is broken. Once it is, the left element is cut off and the process repeats.

## Solution
```java
class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        
        int left = 0;
        int ans = 0;
        int current = 1;

        if (k <= 1) {
            return 0;
        }

        for (int right = 0; right < nums.length; right++) {
            current *= nums[right];
            while (current >= k) {
                current = current / nums[left];
                left++;
            }
            ans += right - left + 1;
        }
        return ans;
    }
}
```
