---
date: 2025-06-18
difficulty: Medium
num: 2080
related_topics:
  - Array
  - Binary Search
  - Design
  - Hash Table
  - Segment Tree
return: Done
---

# Problem: 2080. Range Frequency Queries

## Description

## Approach / Thoughts
sqrt decomp

## Solution
```python
class RangeFreqQuery:

    def __init__(self, arr: List[int]):
        self.n = len(arr)
        self.arr = arr

        self.block_size = ceil(int(sqrt(self.n)))
        self.block_to_freq = defaultdict(Counter)

        for i, val in enumerate(self.arr):
            block_index = i // self.block_size
            self.block_to_freq[block_index][val] += 1
        

    def query(self, left: int, right: int, value: int) -> int:
        left_block_index = left // self.block_size
        right_block_index = right // self.block_size

        left_block_start = left_block_index * self.block_size
        right_block_start = right_block_index * self.block_size

        left_block_end = min(left_block_start + self.block_size, self.n)
        right_block_end = min(right_block_start + self.block_size, self.n)

        if left_block_index == right_block_index:
            freq = 0
            for i in range(left, right+1):
                if self.arr[i] == value:
                    freq += 1
            return freq

        left_freq = 0
        for i in range(left, left_block_end):
            if self.arr[i] == value:
                left_freq += 1

        mid_freq = 0
        for i in range(left_block_index+1, right_block_index):
            mid_freq += self.block_to_freq[i][value]
        
        right_freq = 0
        for i in range(right_block_start, right+1):
            if self.arr[i] == value:
                right_freq += 1

        return left_freq + mid_freq + right_freq


# Your RangeFreqQuery object will be instantiated and called as such:
# obj = RangeFreqQuery(arr)
# param_1 = obj.query(left,right,value)
```
