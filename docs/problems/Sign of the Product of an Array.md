---
date: 2023-07-30
difficulty: Easy
num: 1822
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 1822. Sign Of The Product Of An Array

## Description
This problem was to consider the product of all elements in an array. If the product was positive, return 1, if negative return -1, and if 0 return 0.

## Approach / Thoughts
Originally, I created a product var to store the product by iterating through the array and multiplying each number to the product. However, this will quickly reach the limit of an int variable I’m pretty sure.

What I did on the second approach was to just have the product initialized to 1. If there was a 0, the product would immediately return 0 since any number times 0 is 0. If the number was negative, I multiplied it by -1.

Very easy problem.

## Solution
```java
class Solution {
    public int arraySign(int[] nums) {
        int product = 1;
        for (int i : nums){
            if (i == 0) {
                return 0;
            }

            if (i < 0) {
                product *= -1;
            }
        }
        return product;
    }
}
```
