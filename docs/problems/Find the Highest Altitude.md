---
date: 2023-07-25
difficulty: Easy
num: 1732
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 1732. Find The Highest Altitude

## Description
The problem was to use a prefix sum approach. Basically, a hiker started at 0 elevation and kept going down and up the mountain. We have to find the highest altitude once the trip was over at any given point. Using a prefix sum allows us to find the difference in the altitude and return that.

## Approach / Thoughts
Use prefix sum approach which will tell us the given altitude at each step. From there, we have a max value which we compare to other values to see which one is the biggest and store that. The only thing that tripped me up was since the array started at 1, because it has to assign 1 plus the last, how I would count the very last element.

A very easy solution was to just check the last element after the loop was done executing.

## Solution
```java
class Solution {
    public int largestAltitude(int[] gain) {
        int max = 0;
        for (int i= 1; i < gain.length; i++) {
            gain[i] += gain[i-1];
            max = Math.max(max, gain[i-1]);
        }
        max = Math.max(max,gain[gain.length - 1]);
        return max;
    }
}
```
