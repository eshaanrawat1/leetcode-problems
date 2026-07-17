---
date: 2023-07-26
difficulty: Easy
num: 1929
related_topics:
  - Array
return: Done
---

# Problem: 1929. Concatenation Of Array

## Description
To basically append one array to itself to create an array twice as long as the original with the contents repeated.

## Approach / Thoughts
My approach was to kind of have two pointers. The for loop would traverse through all the elements in the array and assign them to the indices in the new array. Once the counter was the same number as the length of the original array, the counter would reset.

## Solution
```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] ans = new int[2 * nums.length];
        int index = 0;
        for (int i = 0; i < ans.length; i++) {
            if (index == nums.length) {
                index = 0;
            }
            ans[i] = nums[index];
            index++;
        }
        return ans;
    }
}
```
