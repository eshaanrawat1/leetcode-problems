---
date: 2023-07-23
difficulty: Easy
num: 922
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Review
---

# Problem: 922. Sort Array By Parity Ii

## Description
To sort where even indices have even numbers and odd indices have odd numbers.

## Approach / Thoughts
Put all the even nums in one list and all the odd nums in another list and based on the condition of i, add them at the end. Very inefficient.

## Solution
```java
class Solution {
    public int[] sortArrayByParityII(int[] nums) {
        ArrayList<Integer> arr1 = new ArrayList<Integer>();
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        int j = 0 ;
        int k = 0;

        for (int x : nums) {
            if (x % 2 == 0) {
                arr1.add(x);
            }
            else {
                arr2.add(x);
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (i % 2 == 0) {
                nums[i] = arr1.get(j);
                j++;
            }
            else {
                nums[i] = arr2.get(k);
                k++;
            }
        }
        return nums;
    }
}
```
