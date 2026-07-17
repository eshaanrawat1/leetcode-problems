---
date: 2026-06-01
difficulty: Medium
num: 355
related_topics:
  - Hash Table
  - Linked List
  - Design
  - Heap (Priority Queue)
return:
---

# Problem: 355. Design Twitter

## Description
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the `10` most recent tweets in the user's news feed.

Implement the `Twitter` class:

	`Twitter()` Initializes your twitter object.

	`void postTweet(int userId, int tweetId)` Composes a new tweet with ID `tweetId` by the user `userId`. Each call to this function will be made with a unique `tweetId`.

	`List getNewsFeed(int userId)` Retrieves the `10` most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be **ordered from most recent to least recent**.

	`void follow(int followerId, int followeeId)` The user with ID `followerId` started following the user with ID `followeeId`.

	`void unfollow(int followerId, int followeeId)` The user with ID `followerId` started unfollowing the user with ID `followeeId`.

## Approach / Thoughts
each user has posts 
for feed, iterate over following and use sortedset for topk, k=10

## Solution
```python
from sortedcontainers import SortedSet

class Twitter:

    def __init__(self):
        self.following = defaultdict(set)
        self.posts = [[] for _ in range(501)]
        self.timestamp = 0


    def postTweet(self, userId: int, tweetId: int) -> None:
        p = self.posts[userId]
        p.append((self.timestamp, tweetId))
        self.timestamp += 1
 

    def getNewsFeed(self, userId: int) -> List[int]:
        s = SortedSet()
        for f in self.following[userId] | {userId}:
            for p in self.posts[f]:
                s.add(p)

                if len(s) > 10:
                    s.pop(0)
        
        return [x[1] for x in s][::-1]


    def follow(self, followerId: int, followeeId: int) -> None:
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)
```