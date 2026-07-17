---
date: 2023-08-02
difficulty: Medium
num: 137
related_topics:
  - Array
  - Bit Manipulation
return: Done
---

# Problem: 137. Single Number Ii

## Description
Same as single number 1. Every element in the array appears 3 times except for 1. Return that unique value.

## Approach / Thoughts
Two pass hashtable, same as single number 1.

## Solution
```java
class Solution {
    public int singleNumber(int[] nums) {
        
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i : nums) {
            if (!map.containsKey(i)) {
                map.put(i, 1);
            }
            else {
                map.put(i, map.get(i) + 1);
            }
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                return (entry.getKey());
            }
        }
        return -1;
    }
}
```
