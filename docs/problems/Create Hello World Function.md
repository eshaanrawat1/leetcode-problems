---
date: 2024-04-09
difficulty: Easy
num: 2667
related_topics:
  - Javascript
return: Done
---

# Problem: 2667. Create Hello World Function

## Description
Same as problem

## Approach / Thoughts
Hello world

## Solution
```javascript
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```
