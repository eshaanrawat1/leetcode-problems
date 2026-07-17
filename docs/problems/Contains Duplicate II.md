---
date: 2023-07-10
difficulty: Easy
num: 219
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 219. Contains Duplicate Ii

## Description
The problem was to see if there were duplicates in the array and if the indices of the duplicates had an absolute difference less than a target number k.

## Approach / Thoughts
My approach was to use a hashtable. If there were no duplicates found, the hashmap would add the element as the key and the index as the value. If there was a duplicate, then the map would check if the difference of the indices satisfied the given condition. If that was not the case, then the map would put the new duplicate in it as well and keep iterating.

## Solution
```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            }
            else {
                int j = map.get(nums[i]);
                if ((Math.abs(i - j)) <= k){
                    return true;
                }
                map.put(nums[i], i);
            }
        }
        return false;
    }
}
```
