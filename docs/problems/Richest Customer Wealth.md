---
date: 2023-07-27
difficulty: Easy
num: 1672
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 1672. Richest Customer Wealth

## Description
Given a 2D array, or a matrix, we have to find the customer with the richest wealth. In this array, the rows represented the customers while the columns represented different banks.

## Approach / Thoughts
My approach was just to traverse through the array and add up the rows and compare them to each other. This can easily be done with Math.max. I would set the current sum to 0 and have a max amount. By comparing the sum to the max amount, if the new row was greater, it would override the value stored.

## Solution
```java
class Solution {
    public int maximumWealth(int[][] accounts) {
        
        int currMax = 0;
        for (int i = 0; i < accounts.length; i++) {
            int sum = 0;
            for (int j = 0; j < accounts[0].length; j++) {
                sum += accounts[i][j];
            }
            currMax = Math.max(sum, currMax);
        }
        return currMax;
    }
}
```
