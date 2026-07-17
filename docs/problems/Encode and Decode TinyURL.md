---
date: 2024-08-23
difficulty: Medium
num: 535
related_topics:
  - Design
  - Hash Function
  - Hash Table
  - String
return: Done
---

# Problem: 535. Encode And Decode Tinyurl

## Description

## Approach / Thoughts
do literally nothing

## Solution
```python
class Codec:

    def encode(self, longUrl: str) -> str:
        return longUrl + 'a'
        

    def decode(self, shortUrl: str) -> str:
        return shortUrl[:-1]
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
```
