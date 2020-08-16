---
title: Optimized MySQL queries
date: 2020-08-15
path: /optimized-mysql-queries
tags: mysql
featuredImage: ../../static/images/markus-winkler-gLdJnQFcIXE-unsplash.jpg
---

## Table of Contents

```toc
```

## Tips

### #1 Be more specific

Be more specific in your queries, for example, prefer

```
SELECT Column1, Column2 FROM TableName;
```

over

```
SELECT * FROM TableName;
```

### #2 Avoid SELECT DISTINCT

Avoid `select distinct`, instead, opt for selecting additional columns to ensure you get distinct results. Select distinct does a lot of processing.

### #3 WILDCARDS

When using wildcards, make sure they are at as much end of the text as possible. If they are at the beginning then the database engine needs to search more.

```
SELECT * FROM TableName WHERE COLUMN LIKE 'texttofind%';
```

### #4 LIMIT
 
Use `LIMIT` to limit the number of records database engine needs to return.


### #5 INNER JOINS vs WHERE

The where clause creates a CROSS JOIN which is all possible combination of variables and then filters those to find the records which match the query. 

The inner join matches only those records where the ids match and only those are returned from the query.


### #6 UNION vs OR

Both statements lead to the same results, but UNION can combine the result set of multiple queries and it runs faster.

### #7 Indexes

Index all columns used in `WHERE`, `ORDER BY` & `GROUP BY` clauses.

## Resources

1. https://vanseodesign.com/web-design/tips-to-help-you-write-faster-mysql-queries/
2. https://dzone.com/articles/how-to-optimize-mysql-queries-for-speed-and-perfor