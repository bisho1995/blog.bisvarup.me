---
title: Rotting Oranges
date: 2020-04-29
path: /leetcode-rotting-oranges
tags: algorithm, data structures
image: /images/problem-solving.jpg
---

 

[Leetcode: https://leetcode.com/problems/rotting-oranges/](https://leetcode.com/problems/rotting-oranges/)

[Editorial: https://leetcode.com/problems/rotting-oranges/discuss/238681/Java-Clean-BFS-Solution-with-comments](https://leetcode.com/problems/rotting-oranges/discuss/238681/Java-Clean-BFS-Solution-with-comments)

<br/>
At each time interval, the rotten oranges are going to rot the adjacent oranges. Minimum time to rot all the oranges.

---

## Solution Concepts

### First Concept

What I liked about this problem was that I had to use a queue to have a list of all the rotten orange coordinates. It is easy to keep them in a queue, but at each step, I need to add adjacent oranges to the queue as well. So how will I keep count of the time?

<br/>

**Example:**

```java
while(!q.isEmpty()) {
    time++;
    int elem = q.remove();
    q.add(elem+1)
    q.add(elem-1)
}
```
With this approach, I will incorrectly handle the time.

To solve it
```java
while(!q.isEmpty()) {
  time++;
  int queueSize = q.size();
  for(int i=0;i<queueSize;i++) {
    ...
    q.add(x);
    ...
  }
}
```

With this approach, I need not run two queues or bother with size, it is awesome.

Second Concept
To store a list of coordinates in queue

```java
Queue<int []> q = new LinkedList<>();
q.add(new int[]{0, 1});
```

This is amazing, I need now create a class now to store the coordinates. I am creating a queue of array elements and I will add coordinates to the queue in the form of an array. Very smart!!

Third concept
I need to go in the following directions, up, down, left, right

```java
int directions[][] = {{0,1},{0,-1},{-1,0},{1,0}};
```

now get a coordinate and loop through the directions and create new direction by adding the existing coordinate with the direction `x` and `y`

```java
for(int dir[]: dirs) {
  int newX = x + dir[0];
  int newY = x + dir[1];

  // validate newX and newY
}
```

Brilliant!!

