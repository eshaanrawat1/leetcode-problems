---
date: 2024-12-10
difficulty: Medium
num: 2353
related_topics:
  - Design
  - Hash Table
  - Heap (Priority Queue)
  - Ordered Set
return: Done
---

# Problem: 2353. Design A Food Rating System

## Description
same, updating ratings and return max

## Approach / Thoughts
lazy max heap

## Solution
```python
class FoodRatings:

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.d = defaultdict(list)
        self.ratings = {}
        self.cus = {}

        for f, r in zip(foods, ratings):
            self.ratings[f] = r

        for f, c in zip(foods, cuisines):
            self.cus[f] = c
            self.d[c].append((-self.ratings[f], f))

        for k in self.d:
            heapq.heapify(self.d[k])

    def changeRating(self, food: str, newRating: int) -> None:
        self.ratings[food] = newRating
        c = self.cus[food]

        heapq.heappush(self.d[c], (-newRating, food))


    def highestRated(self, cuisine: str) -> str:
        top_food = self.d[cuisine][0][1]
        top_rating = -self.d[cuisine][0][0]

        while self.d[cuisine] and top_rating != self.ratings[top_food]:
            heapq.heappop(self.d[cuisine])
            top_food = self.d[cuisine][0][1]
            top_rating = -self.d[cuisine][0][0]
        return top_food


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)
```
