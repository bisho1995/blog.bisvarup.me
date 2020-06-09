---
title: K Frequent Elements
date: 2020-04-29
path: /k-frequent-elements
tags: algorithm, data structures
featuredImage: ../../static/images/problem-solving.jpg
---

 

[Leetcode: https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)
[Editorial: https://leetcode.com/problems/top-k-frequent-elements/discuss/81602/Java-O(n)-Solution-Bucket-Sort](https://leetcode.com/problems/top-k-frequent-elements/discuss/81602/Java-O(n)-Solution-Bucket-Sort)

I will have a list of elements and I need to output the list of most frequently occurring elements.

---

## Solution Concepts

I liked how this problem can be solved with bucket sort and how simple the solution gets.
I solved this problem before by using hashmaps, classes, and priority queue

1. Create a hashmap of number and its frequency
2. Create buckets of all possible frequencies
3. For each element of the hashmap insert the key to the corresponding frequency bucket
4. Check the frequency bucket from highest to lowest and keep adding numbers to the final solution

My previous solution took 18ms and this bucketsort solution took 7ms 🤩

Simply brilliant solution.

<br/>
<br/>

---

![transition between focused elements]( k-frequent-element.png)