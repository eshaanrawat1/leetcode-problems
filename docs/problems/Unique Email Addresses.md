---
date: 2024-01-03
difficulty: Easy
num: 929
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 929. Unique Email Addresses

## Description
Find number of unique email addresses

- if . is in domain name skip it

- if + is in domain name, everything after is ingored

## Approach / Thoughts
Use split to find the unique domains and join after with the at

## Solution
```python
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique = set()

        for email in emails:
            parts = email.split('@')
            temp = ""

            for ch in parts[0]:
                if ch == '.':
                    continue
                elif ch == '+':
                    break
                else:
                    temp += ch

            unique.add(temp + '@' + parts[-1])

        return len(unique)
```
