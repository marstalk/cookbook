
# 行列存储
行存储，就是以行为单位进行存储，如：

```JSON
132|liujiacheng|23|chengdu|male
133|jinxiaojie|18|shanghai|female
134|nianbao|3|guangxi|null
...
```

列存储，就是以列为单位，如：

```JSON
ID column:132|133|134
name column: pangdongdong|jinxiaojie|nianbao
age column: 23|18|3|
addr column: chengdu|shanghai|guangxi
gender column: male|female|null
...
```

行列、存储的划分，是跟我们的实际需求和计算机的存储方式息息相关的，总结来说，**就是根据不同的需求来设计存储方式，从而减少磁盘IO，最终提高性能**。

接下来分析行、列存储分别适用于什么场景：

## 行存储

OLTP（On Line Transactional Processing）比如MySQL，使用的是就是行存储，因为它提供的最重要特性是事务性增删改查

增：将一行记录添加到表中，因为是行存储，直接将该行记录写到一个磁盘块（block）中即可，这中间只需要找到一个块即可（一次IO）

删：删除一行记录，也只需要找到一个磁盘块即可将整行的数据抹掉，既一次IO

改，查一个道理。

当然有可能会问，我对多行进行增删改查的时候，IO是什么情况？一个磁盘块有可能存储多行记录（比如行字段没有那么多的时候，通常情况下也不会很多，这是我们使用关系型数据时候表设计需要关注点之一），那么M行记录，有可能产生N个IO，其中N≤M。

## 列存储

OLAP（On Line Analytical Processing），分析性数据库，就需要列存储，为什么呢？

分析、分析，就是对大量的数据进行特征计算，也就是说是需要查找的数据比较多，然后进行一定的聚合、排序等操作。比如计算所有会员的平均年龄、统计每个年龄段的人数、计算统计每个城市年龄大于60岁的会员数。

如果上述场景再使用行存储，会发生什么事？

计算所有会员的平均年龄：扫描全表（非常多的IO，这个磁头读完这个block，又要去读下一个block）。

而假设我们是使用列存储，我们只需要将age column读出来即可，只有少量IO（如果一个block存不完一个列的数据，那么有可能存在多个block里面）。

在ES中，为了提供聚合、排序等操作的性能，会对字段进行列存储：text类型叫做fielddata，其他类型叫做doc_values。



ES是面向文档的存储。

# NoSQL
- key-value: Redis, 
- document: 可以看做是key-value的升级版，MongoDB, Elasticsearch
- column: Cassandra, Hbase, 
- graph: Neo4J, InfoGrid, 

https://zhuanlan.zhihu.com/p/390990937
