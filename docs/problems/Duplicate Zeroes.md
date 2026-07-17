---
date: 2023-07-27
difficulty: Easy
num: 1089
related_topics:
  - Array
  - Two-Pointer
return: Done
---

# Problem: 1089. Duplicate Zeroes

## Description
Whenever there is a 0 in the array, duplicate the zero and shift each element after to the right one. This must be done in place.

## Approach / Thoughts
I could not figure out an approach to do it in place, so I ended up copying it over to an arraylist, and trimming the list afterwards. This was super easy and had two separate for loops.

## Solution
```java
class Solution {
    public void duplicateZeros(int[] arr) {
    
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                list.add(arr[i]);
                list.add(0);
            }
            else {
                list.add(arr[i]);
            }
        }

        for (int j = 0; j < arr.length; j++) {
            arr[j] = list.get(j);
        }
        
    }
}
```
