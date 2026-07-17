---
date: 2023-08-05
difficulty: Easy
num: 1389
related_topics:
  - Array
  - Simulation
return: Done
---

# Problem: 1389. Create Target Array In The Given Order

## Description
To make it so the value in nums appeared at the index specified in the index array.

## Approach / Thoughts
Use an arraylist to add the elements into and then copy it over to the array.

## Solution
```java
class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        List<Integer> list = new ArrayList<>();
        int[] ans = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            list.add(index[i], nums[i]);
        }
        for (int j = 0; j < nums.length; j++) {
            ans[j] = list.get(j);
        }
        return ans;
    }
}
```
