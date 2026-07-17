---
date: 2023-08-27
difficulty: Easy
num: 2469
related_topics:
  - Math
return: Done
---

# Problem: 2469. Convert The Temperature

## Description
Convert celsius to K and F.

## Approach / Thoughts
Really easy just did math.

## Solution
```java
class Solution {
    public double[] convertTemperature(double celsius) {
        
        double[] ans = {celsius + 273.15, (celsius * 1.8 + 32)};
        return ans;
    }
}
```
