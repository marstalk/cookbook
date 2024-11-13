# CentOS安装MySQL
## 卸载原有repo源
1. 查询已经存在的mysql及相关依赖包
```java
rpm -qa | grep mysql
```
2. 此时你会看到一堆列表，使用yum命令依次卸载
```java
yum remove mysql-xxx-xxx-xxx
```
3. 接下来删除mysql的残留目录及文件，先用下面的命令找出所有mysql相关的文件夹
```java
find / -name mysql
```
4. 如下指令依次删除
```java
rm -rf /xxx/xxx
```
5. 准备工作已就绪
## 安装MYSQL 8.0
1. 获取repo文件，我在/usr/local的目录下新建了一个mysql文件夹，命令为：mkdir mysql，在该目录下执行以下命令。
```java
wget https://dev.mysql.com/get/mysql80-community-release-el7-2.noarch.rpm
```
2. 安装刚才下载的repo文件
```
rpm -ivh mysql80-community-release-el7-2.noarch.rpm
```
3. 执行成功后，命令查看/etc/yum.repos.d/文件夹下会产生两个文件就对了
```
ls /etc/yum.repos.d/ | grep mysql
mysql-community.repo
mysql-community-source.repo
```
4. 更新yum缓存
```
yum clean all
yum makecache
```
5. 安装
```
yum install mysql-community-server
```
6. 启动mysql并设为开机启动
```
systemctl start mysqld.service
systemctl enable mysqld.service
```
7. 获取初始密码登录mysql
```
cat /var/log/mysqld.log | grep password
2021-02-22T07:48:14.997806Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: ie5rbUYg!wNl
```
8. 这个密码先复制好： **<font color='red'>ie5rbUYg!wNl</font>** 
9. 用上面获取的初始密码登录mysql
```
mysql -u root -p
```
10. 修改密码：把初始密码ie5rbUYg!wNl修改为自己想修改的密码，注意mysql默认情况下设置的密码需要有大小写+数字+特殊字符
```
mysql> ALTER USER 'root'@'%' IDENTIFIED BY '你自己设置的新密码' PASSWORD EXPIRE NEVER; ## 让密码不过期
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '你自己设置的新密码'; ##修改密码
mysql> flush privileges;      ## 刷新权限
mysql> exit;
```
11. 接下来进行mysql的授权，对访问的mysql的主机进行授权，否则访问不了
```
mysql -u root -p     ## 先登录
mysql> create user 'root'@'%' identified by '你自己设置的新密码'; ##创建可以所有用户都可以访问的用户规则  这一步可能可以省了
mysql> grant all privileges on *.* to 'root'@'%';        ##对这个用户规则进行授权
mysql> flush privileges;     ##刷新权限
mysql> exit;
```
12. 可以进行连接了~当然如果你是阿里云上搭的mysql还需要放开端口的访问权限，这个请自行解决。


# Mac install mysql
```bash
brew install 

mysql.server start
mysql.server stop
mysql.server status
```

解决自动启动的问题：
```markdown
通过brew安装了mysql5.7，想关掉mysql进程，尝试了以下几种方法：

mysql.server stop
brew services stop mysql
Activity Monitor里结束进程
都失败了，用ps命令查看进程，每次mysql都会自动重启，google后找到解决办法，输入以下命令：
launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql@5.7.plist

作者：Kyrielight
链接：https://www.jianshu.com/p/026064929bf3
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

# 事务的理论基础ARIES算法

不衰的经典: ARIES事务恢复 [数据库学习的成人试炼]：https://my.oschina.net/fileoptions/blog/2988622

图解数据库Aries事务Recovery算法：  https://zhuanlan.zhihu.com/p/143173278

# 事务隔离
1. RU - Read uncommitted:  can result in dirty reads, non-repeatable reads, and phantom reads.
2. RC - Read committed: 
3. RR - Repeatable read
4. S - Serialization


# Delete VS Drop VS truncate
Delete：删特定数据
- DML
- 表还在
- 可以使用where，根据where是否使用索引确定性能。
- 返回删除的行数
- 行级锁，可以回滚。
- auto-increment不变。
- 可以触发trigger，before or after or instead of delete operation。
- 需要权限
> Every deleted row is locked, so it will require a lot of locks if you’re working in a large table.



Truncate：删全部数据
- DDL
- 表还在
- 不能where，所以只能删除全部记录
- 在SQL server 和postgreSQL中可以回滚；在MySQL、oracle中不能回滚。
- 比delete快，不扫描	
- 表锁
- 重置auto-increment
- 不返行数
- 需要drop权限

Drop：删表
- DDL
- 表不在了。
- 相关的索引、trigger、约束也一并删除
- 不会触发trigger。
- 无法回滚

 DELETE TRUNCATE DROP
Type DML DDL DDL
Uses a lock Table lock Row lock Table lock
Works in WHERE Yes No No
Removes ... One, some, or all rows in a table. All rows in a table. Entire table structure: data, privileges, indexes, constraints, triggers.
Resets ID auto-increment No MySQL: YesOracle: NoPostgreSQL: User decidesSQL Server: Yes Doesn’t apply
Rollback Yes MySQL: NoOracle: NoPostgreSQL: YesSQL Server: Yes MySQL: NoOracle: YesPostgreSQL: YesSQL Server : Yes
Transaction logging Each row Whole table (minimal) Whole table (minimal)
Works with indexed views Yes No No
Space requirements More space Less space More space
Fires triggers Yes No No
Speed Slow Fastest Faster

Which operation is best for which use case?
- To remove specific rows, use DELETE.
- To remove all rows from a large table and leave the table structure, use TRUNCATE TABLE. It’s faster than DELETE.
- To remove an entire table, including its structure and data, use DROP TABLE.
 
参考
https://learnsql.com/blog/difference-between-truncate-delete-and-drop-table-in-sql/


# Join
![picture 3](../images/f988acecf8d3fedfbeb9c0eb2c03d7d78054d1e17118deb7a7d44d278ed5c87a.png)  

差集是：
```sql
A left join B  on A.key = B.key
where B.key is null(B.key is null表示在B圈外，所以只剩下了差集。)
```

交集是
```sql
A inner join B on A.key = B.key
```

并集是
```sql
A full outer join B on A.key = B.key
```

# 如何解决MySQL主从同步延迟的问题【重点】
从库从主库读取到并写到中继日志，SQL线程将中继日志重写到从库中，默认是一个串行的过程。
假设主库的写请求是：
1000/秒  -> 几毫秒
2000/秒  -> 小几十毫秒
4000/秒  -> 大及时毫秒，这个时候就要分库了。降低每个库的写性能。

以前线上确实处理过因为主从同步延时问题而导致的线上的 bug，属于小型的生产事故。
是这个么场景。有个同学是这样写代码逻辑的。先插入一条数据，再把它查出来，然后更新这条数据。在生产环境高峰期，写并发达到了 2000/s，这个时候，主从复制延时大概是在小几十毫秒。线上会发现，每天总有那么一些数据，我们期望更新一些重要的数据状态，但在高峰期时候却没更新。用户跟客服反馈，而客服就会反馈给我们。
我们通过 MySQL 命令：
show status
查看 Seconds_Behind_Master，可以看到从库复制主库的数据落后了几 ms。
一般来说，如果主从延迟较为严重，有以下解决方案：
- 分库，将一个主库拆分为多个主库，每个主库的写并发就减少了几倍，此时主从延迟可以忽略不计。
- 打开 MySQL 支持的并行复制，多个库并行复制。如果说某个库的写入并发就是特别高，单库写并发达到了 2000/s，并行复制还是没意义。
- 重写代码，写代码的同学，要慎重，插入数据时立马查询可能查不到。如果确实是存在必须先插入，立马要求就查询到，然后立马就要反过来执行一些操作，对这个查询设置直连主库。不推荐这种方法，你要是这么搞，读写分离的意义就丧失了。

[MySQL主从数据库同步延迟问题解决-阿里云开发者社区](https://developer.aliyun.com/article/42638)

# 主从架构数据丢失问题
semi-sync，半同步复制。至少一个从库将binlog写到中继日志并且返回ack，才能够提交日志。

# InnoDB vs MyISAM
MyISAM是5.1版本之前的默认引擎。
不支持事务、行级锁、外键等重要特性。
索引和数据分开存储
适用于读多写少的场景。

InnoDB是5.1版本之后的默认引擎。
支持事务、行级锁、外键等重要特性。
通过MVCC来支持高并发。
通过聚集索引来组织数据。



# 主键
`id int primary key auto_increment`

1. 要求递增（有序）；提高插入效率。
2. 要求短，使得每页存放的数据尽可能的多，提高查询效率。



# ====Mysql====



---
# ====Syntax====
# create user
```sql
CREATE USER 'itlouis'@'10.17.70.85' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON * . * TO 'itlouisl'@'10.17.70.85';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'itlouisl'@'10.17.70.85';
```

# alter table add
```sql
alter table t_api 
add baseUrls text after http_provider, 
add routeInfos text after baseUrls, 
add registryCenter varchar(20) after routeInfos, 
add authType varchar(30) after registryCenter;
```
# alter table drop column
```sql
alter table t_api 
drop column baseUrls,
drop column routeInfos, 
drop column registryCenter, 
drop column authType;
```

# query index type
```sql
show index from table_xxx
```



# Other
```sql
show global status like 'innodb_page_size'';
```

# blob vs text
blob是以二进制的方式存储的，比如图片等，text是以字符串的方式存储的。



====other====
# dump
`mysqldump -uelastic -p'Elastic_123' --host=172.16.32.5 -F webservice > dump.sql`
```roomsql
-- MySQL dump 10.13  Distrib 5.6.40, for Linux (x86_64)
--
-- Host: 172.16.32.5    Database: webservice
-- ------------------------------------------------------
-- Server version    5.5.5-10.1.9-MariaDBV1.0R012D002-20171127-1822

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `building`
--

DROP TABLE IF EXISTS `building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `building` (
  `Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `BuildingId` varchar(64) NOT NULL COMMENT '虚拟建筑Id',
  `Status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '虚拟建筑状态：0、处理中；1、正常；-1，停止；-2，销毁中；-3，已销毁',
  `BuildingName` varchar(128) NOT NULL DEFAULT '' COMMENT '虚拟建筑名称',
  `CreateTime` timestamp NOT NULL DEFAULT '2017-12-03 16:00:00' COMMENT '创建时间',
  `UpdateTime` timestamp NOT NULL DEFAULT '2017-12-03 16:00:00' COMMENT '更新时间',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `BuildingId` (`BuildingId`)
) ENGINE=InnoDB AUTO_INCREMENT=2010 DEFAULT CHARSET=utf8 COMMENT='虚拟建筑表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
INSERT INTO `building` VALUES (2000,'building-2',0,'6YFcmntKrNBIeTA','2018-05-30 13:28:31','2018-05-30 13:28:31'),(2001,'building-4',0,'4rY8PcVUZB1vtrL','2018-05-30 13:28:34','2018-05-30 13:28:34'),(2002,'building-5',0,'uyjHVUYrg9KeGqi','2018-05-30 13:28:37','2018-05-30 13:28:37'),(2003,'building-7',0,'DNhyEBO4XEkXpgW','2018-05-30 13:28:40','2018-05-30 13:28:40'),(2004,'building-1',0,'TmtYX6ZC0RNB4Re','2018-05-30 13:28:43','2018-05-30 13:28:43'),(2005,'building-6',0,'t8YQcjeXefWpcyU','2018-05-30 13:28:49','2018-05-30 13:28:49'),(2006,'building-10',0,'WozgBc2IchNyKyE','2018-05-30 13:28:55','2018-05-30 13:28:55'),(2007,'building-3',0,'yJk27cmLOVQLHf1','2018-05-30 13:28:58','2018-05-30 13:28:58'),(2008,'building-9',0,'RSbjotAh8tymfxs','2018-05-30 13:29:04','2018-05-30 13:29:04'),(2009,'building-8',0,'IBOMlhaXV6k226m','2018-05-30 13:29:31','2018-05-30 13:29:31');
/*!40000 ALTER TABLE `building` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-02 14:23:51

```


# group by for NULL
```sql
-- problem: count(col_a) missing NULL value
0	
8	
19	在用

-- solution 1: convert NULL to 1, then use SUM
select check_status, SUM(IF(check_status IS NULL, 1, 1)) as uncheck from purchasing_info group by check_status;
null	12692
1	    3

-- solution 2: count(*)
select count(*), usage_status_name from purchasing_info group by usage_status_name;
12668	
8	
19	在用

-- more advanced solution:
SELECT 
    department_id,
    SUM(IF(salary IS NULL, 1, 0)) AS null_salary_count,
    SUM(IF(salary = 50000, 1, 0)) AS salary_50000_count,
    SUM(IF(salary = 60000, 1, 0)) AS salary_60000_count,
    SUM(IF(salary IS NOT NULL AND salary NOT IN (50000, 60000), 1, 0)) AS other_salary_count
FROM 
    employees
GROUP BY 
    department_id;
```


# truncat digits
```sql
-- 资产金额203676337.65，单位万 TRUNCATE(SUM(net_worth)/10000, 0)
select TRUNCATE(SUM(net_worth)/10000, 0) from purchasing_info;
```


# in operator

## what if tons of values in the list? and exceed the limit of 1000?
1. use join
```sql
select * from table1 where col1 in (valu1, valu2, valu3,..., valu1000)
union all
select * from table1 where col1 in (valu1001, valu1002, valu1003,..., valu2000)
```

2. insert into a temp table and join
```sql
create temporary table temp_table (col1 int); -- temporary table lifecycles are session-based
insert into temp_table values (valu1), (valu2), (valu3),..., (valu1000);
select * from table1 where col1 in (select col1 from temp_table);
```
it works well when multiple queries need to use the same list of values.

3. use subquery
```sql
select * from table1 where col1 in (select col1 from table2);
```



