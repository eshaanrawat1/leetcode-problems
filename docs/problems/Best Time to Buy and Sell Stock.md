---
date: 2023-07-13
difficulty: Easy
num: 121
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 121. Best Time To Buy And Sell Stock

## Description
The problem was to find the best time to buy and sell stocks given an array where each index represented a day. Basically, we want to buy at a really low price and sell on a later date at a really high price. If there is no possible profit, we return 0.

## Approach / Thoughts
My approach was to brute force and test with a nested for loop, comparing each element with each other. This was successful, but gave a time limit exceeded approach.

## Solution
```java
class Solution {
    public int maxProfit(int[] prices) {
        
        int k = 0;
        for (int i = 0; i < prices.length; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                int m = prices[j] - prices[i];
                if (m > k) {
                    System.gc();
                    k = m;
                }
            }
        }

        if (k < 1) {
            return 0;
        }

        else {
            return k;
        }    
    }
}
```
