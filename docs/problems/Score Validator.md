---
date: 2026-05-12
difficulty: Easy
num: 3921
related_topics:
  - 
return:
---

# Problem: 3921. Score Validator

## Description
You are given a string array `events`.

Initially, `score = 0` and `counter = 0`. Each element in `events` is one of the following:

	`"0"`, `"1"`, `"2"`, `"3"`, `"4"`, `"6"`: Add that value to the total score.

	`"W"`: Increase the counter by 1. No score is added.

	`"WD"`: Add 1 to the total score.

	`"NB"`: Add 1 to the total score.

Process the array from left to right. Stop processing when either:

	All elements in `events` have been processed, or

	The counter becomes 10.

Return an integer array `[score, counter]`, where:

	`score` is the final total score.

	`counter` is the final counter value.

## Approach / Thoughts
[[Biweekly Contest 182]]

parse

## Solution
```python
class Solution:
    def scoreValidator(self, events: list[str]) -> list[int]:
        score = cnt = 0
        for e in events:
            if e in '1023456':
                score += int(e)
            elif e == 'W':
                cnt += 1
            elif e == 'WD' or e == 'NB':
                score += 1

            if cnt == 10:
                break
        return [score, cnt]
```