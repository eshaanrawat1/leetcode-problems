---
date: 2026-04-14
difficulty: Easy
num: 3894
related_topics:
return:
---

# Problem:  

## Description
You are given an integer `timer` representing the remaining time (in seconds) on a traffic signal.

The signal follows these rules:

- If `timer == 0`, the signal is `"Green"`
- If `timer == 30`, the signal is `"Orange"`
- If `30 < timer <= 90`, the signal is `"Red"`

Return the current state of the signal. If none of the above conditions are met, return `"Invalid"`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
simple

## Solution
```python
class Solution:
    def trafficSignal(self, timer: int) -> str:
        # 0:38
        
        if timer == 0:
            return "Green"
        if timer == 30:
            return "Orange"
        if 30 < timer <= 90:
            return "Red"
        return "Invalid"