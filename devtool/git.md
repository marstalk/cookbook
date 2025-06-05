
# 辅助网站
https://git.gaozih.com/

-v: verbose

# 查看远端分支
```
git branch -a
```

# checkout 远端分支
```bash
git checkout <remote-branch-name>
```

# create new branch base on current branch and checkout
```bash
git branch -m new-feature/sss/xxx 
# equals to 
git branch new-feature/sss/xxx
```

# pull
使用rebase的方式merge会使得commit log更加简洁。Nacos推荐使用该方式。
```
git pull -r
```

# fatal: refusing to merge unrelated histories
造成这个原因是因为github那边新建了项目、本地也通过git init来创建了项目，这个时候，如果执行git pull，则会报这个错，意思是这两个不同的git项目，使用--allow-unrelated-histories的话可以解决。
```
git pull origin master --allow-unrelated-histories
```

# 如何将本地的git项目关联到github上？
```
git remote add origin xxxxxx.git
```

# Git Hub search language

限定关键字匹配的区域：name，description，readme
- xxx in:name
- xxx in:description
- xxx in:readme

特定用户或者组织：user，org
- xxxx org:alibaba
- user:marstalk

跟数量的查询条件forks, followers, stars
- user:xxx forks:>100

- xxx followers:>100
- xxx yyy followers: 100..200 

- stars:>200
- stars:<400
- stars:500
- stars:200..300

Java开源的stars:>20000数排行：
- elastic/elasticsearch
- spring-projects/spring-boot
- reactiveX/RxJava
- spring-projects/spring-framework
- google/guava
- square/okhttp
- apache/dubbo
- netty/netty
- alibaba/arthas
- crtripcorp/apllo
- alibaba/druid
- alibaba/fastjson
- netflix/Hystrix

官网参考https://docs.github.com/

# Git config reset password
```
git config --system --unset credential.helper
```

# Share to remote

Configure Git for the first time
```shell
git config --global user.name "Louis Liu"
git config --global user.email "louisl@test.com"
```

```shell
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Existing folder
If you already have code ready to be pushed to this repository then run this in your terminal.
```shell
cd existing-project
git init
git add --all
git commit -m "Initial Commit"
git remote add origin ssh://git@git.test.org/~louisl/prm_cvent_sync.git
git push -u origin master
```

Existing Git repository
My code is already tracked by Git
If your code is already tracked by Git then set this repository as your "origin" to push to.
```shell
cd existing_repo
git remote add origin git@git.test.com:paas/yak.git
git push -u origin --all
git push -u origin --tags
```

如果要修改已经存在的remote，可以：
```shell
git remote set-url origin ssh:xxxxx.git
# or
git remote remove origin
```

# rollback
预置知识
生产环境和UAT环境都是使用的master分支构建。
当前生产是master合并了release/3.6.3的代码
当前UAT是master合并了release/3.6.3和release/3.7.0的代码。

苦难点
生产环境出现了紧急问题，必须赶在3.7.0之前上一个新的版本3.6.4

解决办法一
关键字：reset，force push，中央仓库权限。

master分支reset到release/3.6.3，然后force push到delta仓库。
这个需要有delta的写权限。（找Steven赋予）
checkout master分支。
找到release/3.6.3的最后一次提交，然后reset到这个commit。效果这个分支即master的commitlog就只到该commit，代码也是到这个commit。当时如果此刻pull一下，就会回到远程仓库分支的状态。
这个master在push的时候，默认是指向个人远程仓库地址。这个时候，我们不能push到个人远程仓库，因为还需要pr到中央仓库，但是这个时候会提示你先merge。
所以这个时候需要直接force push到中央仓库。Idea中默认会把master分支锁住，不允许force push，在设置中修改下即可。
有了中央的写权限，就可以force push到delta仓库中。
将个人仓库和本地的master分支删除。
将中央仓库的master分支同步到个人远端，然后在fetch，checkout即可。
以release/3.6.3分支为基础创建release/3.6.4，并提交对应的bug修复。
缺点是：
其他的协作者也需要删除本地和个人远端的master分支。
master的提交历史被篡改。

解决办法二
尚未证实的方法，通过revert的方式。
将相关的commit一个一个的revert
优点是保留了master分支上的提交历史。


# git diff
```bash
git diff path/to/file
```

# git log
```shell
git log
git log --oneline
git log --author=""
git log --author="" --since="2024-08-01" --until="2024-08-25"
```

# git stage
```shell
git add <file1> <file2>
git stash push -m "stash message" -- <file1> <file2>
git stash list
git stash apply stash@{n}
git stash drop stash@{n}
git stash pop
```
