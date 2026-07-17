---
date: 2023-07-26
difficulty: Medium
num: 167
related_topics:
  - Array
  - Binary Search
  - Two-Pointer
return: Done
---

# Problem: 167. Two Sum Ii   Input Array Is Sorted

## Description
This problem was to return the indices of the two values which sum equals the target number. The array is already sorted in advance, but the catch is that the array is 1-indexed which means the first element is at index 1.

## Approach / Thoughts
My approach was to use the simple two-pointers approach with one starting from the end and one at the beginning since it is already sorted. If the sum is greater than target, the right pointer will decrement. Otherwise, the left pointer will increment.

## Solution
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        int[] ans = new int[2];

        while (left < right) {
            if (numbers[left] + numbers[right] > target){
                right--;
            }
            else if (numbers[left] + numbers[right] < target){
                left++;
            }
            else {
                ans[0] = left + 1;
                ans[1] = right + 1;
                return ans;
            }
        }
        return ans;
    }
}
```
