---
date: 2026-04-07
difficulty: Medium
num: 3889
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given a string `s` consisting of lowercase English letters and digits.

For each character, its **mirror character** is defined by reversing the order of its character set:

- For letters, the mirror of a character is the letter at the same position from the end of the alphabet.
    - For example, the mirror of `'a'` is `'z'`, and the mirror of `'b'` is `'y'`, and so on.
- For digits, the mirror of a character is the digit at the same position from the end of the range `'0'` to `'9'`.
    - For example, the mirror of `'0'` is `'9'`, and the mirror of `'1'` is `'8'`, and so on.

For each **unique** character `c` in the string:

- Let `m` be its **mirror** character.
- Let `freq(x)` denote the number of times character `x` appears in the string.
- Compute the **absolute difference** between their **frequencies**, defined as: `|freq(c) - freq(m)|`

The mirror pairs `(c, m)` and `(m, c)` are the same and must be counted **only once**.

Return an integer denoting the total sum of these values over all such **distinct mirror pairs**.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
count 

## Solution
```python
class Solution:
    def mirrorFrequency(self, s: str) -> int:
        # 2:27
        
        alpha = 'abcdefghijklmnopqrstuvwxyz'
        dig = '0123456789'

        cnt = Counter(s)
        res = 0

        for i in range(13):
            res += abs(cnt[alpha[i]] - cnt[alpha[~i]])
        for i in range(5):
            res += abs(cnt[dig[i]] - cnt[dig[~i]])
        return res