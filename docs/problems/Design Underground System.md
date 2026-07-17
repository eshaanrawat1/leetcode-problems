---
date: 2026-01-09
difficulty: Medium
num: 1396
related_topics:
  - Design
  - Hash Table
  - String
return: Done
---

# Problem: 1396. Design Underground System

## Description

## Approach / Thoughts
hashing start, end pairs keep running sum and count for average

## Solution
```python
class UndergroundSystem:

    def __init__(self):
        self.station_sum = Counter()
        self.station_cnt = Counter()

        self.travel = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.travel[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        in_station, in_time = self.travel[id]
        self.station_sum[(in_station, stationName)] += (t-in_time)
        self.station_cnt[(in_station, stationName)] += 1

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return self.station_sum[(startStation, endStation)] / self.station_cnt[(startStation, endStation)]


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)
```
