---
title: LC - Longest Increasing Subsequence
date: 2021-04-11
path: /lc-longest-increasing-subsequence
tags: leetcode, coding
featuredImage: ../../static/images/problem-solving.jpg
---

[leetcode https://leetcode.com/problems/longest-increasing-subsequence/](https://leetcode.com/problems/longest-increasing-subsequence/)

[editorial](https://leetcode.com/problems/longest-increasing-subsequence/solution/)

There are two solutions which I liked about this problem. I got both of them by going through the editorial.

## Solution 1 - Recursion
The idea behind recursion is at evert step we either consider (or take) an element or leave an element. For example lets say the sample is 
```js
[1,2,4,5]
```
We do not know beforehand what sequence will give us the increasing order so we should somehow "try" all the possible combinations. So here let's say we are at 2, then to create **the new sequence** we can either take 4 or leave 4.
*I understand that since it is a small example it looks like we can guess just by looking at it, but if this is a big list then it would not be possible.*

So the way we either take or leave a number is done like this,
Say the function is defined as 
```ts
function soln(nums: Array<number>, prevIndex: number, currIndex: number) {
    ...
}
```
In the recursion we do this
```ts
let taken = 0
if(nums[currIndex]>nums[prevIndex]) {
    taken = 1 + soln(nums, currIndex, currIndex+1)
}
const notTaken = soln(nums, prevIndex, currIndex+1)
```

So the idea of we either take an element or not take an element is expressed in code is mind blowing. I really liked it.

**p.s. This is not an optimal algorithm, as it produces an O(2^n) output, although we can use memoization to get a O(n^2) algorithm**

## Solution 2 - DP 

The idea behind this is let's say we have n elements in an array. To calculate the LCS of array upto n, it is always this case
```ts
Max(LCS(0), LCS(1), LCS(2),..., LCS(n-1)) + 1
```
So we need to find the LCS of the previous sequences, find the max and add 1 to it.
