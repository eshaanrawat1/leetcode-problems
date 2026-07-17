---
date: 2023-08-01
difficulty: Easy
num: 1470
related_topics:
  - Array
return: Done
---

# Problem: 1470. Shuffle The Array

## Description
Given an index of length n, make a new array that has the same elements of the original array while alternating starting from n/2. For example, the first element of the new array is the same element as the original. The second element of the new array is the halfpoint index of the original array. Then, increment both counts.

## Approach / Thoughts
My approach was to use a two pointer approach and a loop. One pointer was at the beginning of the original array, the other was at the midpoint (n) of the original array. Since the array asked to return in x1,y1 form, I did the following.

If the index was even, add the element at the first pointer index and increment that.

If the index was odd, add the element add the midpoint pointer index and increment.

## Solution
```java
class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] ans = new int[nums.length];
        
        int x = 0;
        int y = n;

        for (int i = 0; i < ans.length; i++) {
            if (i % 2 == 0) {
                ans[i] = nums[x];
                x++;
            }
            else {
                ans[i] = nums[y];
                y++;
            }
        }
        return ans;
    }
}
```
