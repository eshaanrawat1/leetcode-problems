---
date: 2026-04-02
difficulty: Medium
num: 3885
related_topics:
  - Senior
  - Heap
return:
---

# Problem:  

## Description
You are given an initial list of events, where each event has a unique `eventId` and a `priority`.

Implement the `EventManager` class:

- `EventManager(int[][] events)` Initializes the manager with the given events, where `events[i] = [eventIdi, priority​​​​​​​i]`.
- `void updatePriority(int eventId, int newPriority)` Updates the priority of the **active** event with id `eventId` to `newPriority`.
- `int pollHighest()` Removes and returns the `eventId` of the **active** event with the **highest** priority. If multiple active events have the same priority, return the **smallest** `eventId` among them. If there are no active events, return -1.

An event is called **active** if it has not been removed by `pollHighest()`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
lazy heap deletion

## Solution
```python
class EventManager:

    def __init__(self, events: list[list[int]]):
        self.pq = [(-p,e) for e,p in events]
        heapq.heapify(self.pq)

        self.priority = {e:p for e,p in events}

    def updatePriority(self, eventId: int, newPriority: int) -> None:
        self.priority[eventId] = newPriority
        heapq.heappush(self.pq, (-newPriority, eventId))
        

    def pollHighest(self) -> int:
        while self.pq:
            priority, event_id = heapq.heappop(self.pq)
            priority *= -1

            if event_id not in self.priority:
                continue

            if priority == self.priority[event_id]:
                del self.priority[event_id]
                return event_id
        return -1
        


# Your EventManager object will be instantiated and called as such:
# obj = EventManager(events)
# obj.updatePriority(eventId,newPriority)
# param_2 = obj.pollHighest()