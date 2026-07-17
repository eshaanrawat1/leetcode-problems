---
date: 2026-03-03
difficulty: Medium
num: 3849
related_topics:
  - Staff
  - String
  - Greedy
  - Bit Manipulation
return:
---

# Problem:  

## Description
You are given two binary strings `s` and `t`​​​​​​​, each of length `n`.

You may **rearrange** the characters of `t` in any order, but `s` **must remain unchanged**.

Return a **binary string** of length `n` representing the **maximum** integer value obtainable by taking the bitwise **XOR** of `s` and rearranged `t`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
s can't change
map opposite character in t if possible, greedy order most significant bit

## Solution
```python
class Solution:
	def maximumXor(self, s: str, t: str) -> str:
		n = len(s)
		cnt = Counter(t)
		
		res = []
		val = []
		
		for i in range(n):
			if cnt['1'] == 0:
				res.append('0')
				cnt['0'] -= 1
			
			elif cnt['0'] == 0:
				res.append('1')
				cnt['1'] -= 1
			
			
			elif s[i] == '1':
				res.append('0')
				cnt['0'] -= 1
			
			elif s[i] == '0':
				res.append('1')
				cnt['1'] -= 1
			val.append(str(int(s[i]) ^ int(res[-1])))
		return ''.join(val)