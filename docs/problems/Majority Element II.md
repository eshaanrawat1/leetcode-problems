---
date: 2023-08-03
difficulty: Medium
num: 229
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sorting
return: Done
---

# Problem: 229. Majority Element Ii

## Description
Given an array nums, return all elements that have a frequency greater than the length of nums divided by 3.

## Approach / Thoughts
My approach was to use a two pass hash table to solve the problem. The first loop would iterate through the array and add values to the hashmap. It would also have a value counter that would increment whenever there were any duplicates.

The second loop would go through each element of the hashmap and see if the value (which is the frequency) was greater than N (nums.length / 3). If that were the case, the key was added to the arraylist.

## Solution
```java
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int N = nums.length / 3;
        HashMap<Integer, Integer> map = new HashMap<>();
        List<Integer> ans = new ArrayList<>();

        for (int i : nums) {
            if (!map.containsKey(i)) {
                map.put(i, 1);
            }
            else {
                map.put(i, map.get(i) + 1);
            }
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > N) {
                ans.add(entry.getKey());
            }
        }
        return ans;
    }
}
```
