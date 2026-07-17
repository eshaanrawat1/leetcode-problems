---
date: 2025-01-21
difficulty: Hard
num: 68
related_topics:
  - Array
  - Simulation
  - String
return: Done
---

# Problem: 68. Text Justification

## Description

## Approach / Thoughts
string parse handle last line separate

## Solution
```python
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res, tmp = [], []
        cur_len = 0

        def process():
            num_words = len(tmp) - 1
            max_len = sum(len(w) for w in tmp)
            spaces = maxWidth - max_len

            if num_words:
                buckets = [spaces // num_words for _ in range(num_words)]
                buckets.append(0)
                rem = spaces % num_words 
            else:
                return ''.join(tmp[0] + ' ' * spaces)

            i = 0
            while rem:
                buckets[i] += 1
                rem -= 1 
                i += 1
            
            ans = []
            for i, w in enumerate(tmp):
                ans.append(w + ' ' * buckets[i])
            return ''.join(ans)

        def last():
            ans = []
            max_len = sum(len(w) + 1 for w in tmp)

            for w in tmp:
                ans.append(w + ' ')
            ans.append(' ' * (maxWidth - max_len))
            res.append(''.join(ans)[:maxWidth])

        for w in words:
            if len(w) + cur_len > maxWidth:
                res.append(process())
                tmp = [w]
                cur_len = len(w) + 1
            else:
                cur_len += len(w) + 1
                tmp.append(w)
        last()
        return res
```
