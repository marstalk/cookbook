# 基本概念
Maven的好处，项目文件比较小，不会包含依赖包。普通项目要包含依赖包。

- maven通过groupId，artifactId和version来做为jar包的坐标来定位到Jar包的位置。
- maven通过将jar包放置到仓库中，给所有的项目使用，享元模式。

两大核心：
- 依赖管理，
- 项目构建：单元测试，打包等

Maven是Java开发的程序，需要Java环境才能运行，即需要JAVA_HOME的环境变量。

- 本地仓库：存放本地项目依赖的jar包。本地上找不到jar包，就会往私服上或者中央仓库上寻找。
- 私服：局域网内的服务器，存放大家依赖的jar包，私服没有的话，可以去中央仓库去寻找。
- 中央仓库：在互联网上，比如Apache提供的仓库，Ali提供的仓库等

个性化配置
修改settings.xml中的本地仓库配置和中央仓库地址：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <localRepository>D:\maven-repository</localRepository>
  <pluginGroups></pluginGroups>
  <proxies></proxies>
  <servers></servers>
  <mirrors>
        <mirror>    
            <id>alimaven</id>    
            <mirrorOf>central</mirrorOf>    
            <name>aliyun maven</name>    
            <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>  
        </mirror>  
        <!-- 中央仓库1 -->  
        <mirror>    
            <id>repo1</id>    
            <mirrorOf>central</mirrorOf>    
            <name>Human Readable Name for this Mirror.</name>    
            <url>http://repo1.maven.org/maven2/</url>  
        </mirror>  
        <!-- 中央仓库2 -->  
        <mirror>    
            <id>repo2</id>    
            <mirrorOf>central</mirrorOf>    
            <name>Human Readable Name for this Mirror.</name>    
            <url>http://repo2.maven.org/maven2/</url>  
        </mirror>
  </mirrors>
  <profiles></profiles>
</settings>
```

有固定的项目目录结构
```
/yourProject
    src
        main
            java
            resources
        test
            java
            resources
    pom.xml
```
如果是模块化的项目
```
/yourProject
    modelA
        src
        pom.xml
    modelB
        src
        pom.xml
```

相互独立的生命周期设计，常见命令
- 清理clean：删除target目录
- 编译compile：编译项目，并输出到target目录，实际上是调用了插件（需手动添加，比如maven-compiler-plugin插件）来进行编译。
- 测试test：进行编译，再运行单元测试，src/test/java下的类进行测试，比如以xxxTest.java的命名方式。
- 打包package：war，jar，pom（作为父类工程）根据不同的情况打包，输出到target目录下。
- 安装install：将包发布到本地仓库，jar包被发送到本地仓库中。 

三套生命周期，相互独立。在一套生命周期中，执行任何一个操作，同属的同一个周期的前置命令也会被执行。
- 清理生命周期CleanLifeCycle: clean

- 默认生命周期DefaultLifeCycle: compile, test, package, install, deploy
- 站点生命周期SiteLifeCycle: site

概念模型
![picture 2](../images/f14f41bf58fd2610881ea4bc99f8baf6b95db1af75a455478f825a8d42c045e3.png)  

# generate project
```bash
mvn archetype:generate \
    -DarchetypeGroupId=org.apache.flink \
    -DarchetypeArtifactId=flink-walkthrough-datastream-java \
    -DarchetypeVersion=1.18-SNAPSHOT \
    -DgroupId=frauddetection \
    -DartifactId=frauddetection \
    -Dversion=0.1 \
    -Dpackage=spendreport \
    -DinteractiveMode=false
```

# settings.xml structure
一个setting文件的顶级结构由下面几部分组成：
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                        https://maven.apache.org/xsd/settings-1.0.0.xsd">
    <localRepository/>
    <interactiveMode/>
    <offline/>
    <pluginGroups/>
    <servers/>
    <mirrors/>
    <proxies/>
    <profiles/>
    <activeProfiles/>
</settings>
```
我们主要关心<mirror/> <servers/>  <profiles/> <activeProfiles/>。
## mirror
相当于一个拦截器，它会拦截maven对remote repository的相关请求，把请求里的remote repository地址，重定向到mirror里配置的地址。
mirror在我们的配置文件中没有使用，因为我们的私服已经通过虚拟仓库组合了多个本地库和远程库。
## servers
针对 setting文件中的 profiles 和  pom文件中的distributionManagement 里面的repository进行密码设置，通过id进行关联。
## profiles
setting文件中的profile元素是pom.xml profile元素的一部分，它由activation, repositories, pluginRepositories 和 properties 元素构成。
这个元素把每个项目中的公共部分提取出来，不用每个项目都进行包含。
## activeProfiles
在settings.xml文件中，通过<activeProfiles>激活具体的repository或者一些其他配置：
<activeProfiles>
  <activeProfile>g7-artifactory</activeProfile>
</activeProfiles>
在上述示例中，默认激活<id>g7-artifactory</id>的<profile>，当然，也可以根据需要，默认激活多个<profile>。

# 提速
add mirror in `setting.xml` to speed up download.
```xml
<mirror>    
    <id>alimaven</id>    
    <mirrorOf>central</mirrorOf>    
    <name>aliyun maven</name>    
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>  
    </mirror>  
    
    <!-- 中央仓库1 -->  
    <mirror>    
    <id>repo1</id>    
    <mirrorOf>central</mirrorOf>    
    <name>Human Readable Name for this Mirror.</name>    
    <url>http://repo1.maven.org/maven2/</url>  
    </mirror>  
    
    <!-- 中央仓库2 -->  
    <mirror>    
    <id>repo2</id>    
    <mirrorOf>central</mirrorOf>    
    <name>Human Readable Name for this Mirror.</name>    
    <url>http://repo2.maven.org/maven2/</url>  
</mirror>
```

# wget
`wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.8.1/binaries/apache-maven-3.8.1-bin.tar.gz`


# 指定settings
`mvn install --settings c:\user\settings.xml`



---
# pom.xml structure

## 1. basic info
```xml
<!-- pom file model version, constraint and validate the <TAG> -->
<modelVersion>4.0.0</modelVersion> 

<!-- unique define of this project -->
<groupId>com.ruoyi</groupId>
<artifactId>ruoyi-flowable-plus</artifactId>
<version>4.2.0</version>

<!-- additional info about this project -->
<name>RuoYi-Flowable-Plus</name>
<url>https://gitee.com/KonBAI-Q/ruoyi-flowable-plus</url>
<description>RuoYi-Flowable-Plus后台管理系统</description>

<packaging>pom</packaging>
```

common packaging value:
- pom:
- jar:
- war:
- 

## 2. properties
used to define custome variable and it's value for further usage: `${variable.name}`
```xml
<properties>
    <java.version>1.8</java.version>
<properties>
```

## 3. dependencyManagement
There could be many sub-module in the project, like each module could use springboot-starter-aop, then in order to make sure all sub-module are using the same version, that's what it does.
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>${spring-boot.version}</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```

## 4. modules
nesting sub-modules

## 5. build
descript how this project is build and output to /target folder. we can use different plugin to control every phase like
- build phase: to specify source/build target Java version.
- test phase: how to run tests(junit, testng etc.) and generate report.
- package: to generate jar/runnable-jar/spring-fat-jar etc.

### plugin--compiler
通过maven-compiler-plugin插件设定项目Java编译版本
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <encoding>UTF-8</encoding>
            </configuration>
        </plugin>
    </plugins>
</build>
```

### plugin--surefile
Run the JUnit unit tests in an isolated classloader. Also see **failsafe**
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-surefire-plugin</artifactId>
      <version>2.22.2</version>
    </plugin>
  </plugins>
</build>
```

### plugin--jar
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-jar-plugin</artifactId>
      <version>3.2.0</version>
      <configuration>
        <archive>
          <manifestEntries>
            <Built-By>${user.name}</Built-By>
          </manifestEntries>
        </archive>
      </configuration>
    </plugin>
  </plugins>
</build>

```

### plugin--spring-boot-maven
1. Handles creating the executable JAR with `mvn clean package` and running the Spring Boot application with `mvn spring-boot:run`
2. create executable jar including dependency and web container like netty/tomcat. `mvn spring-boot:repackage`
```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <version>${spring-boot.version}</version>
</plugin>
```

## 6. repositories

## 7. profiles

# 依赖管理
项目A依赖B，B依赖C version1，
项目A依赖D，D依赖C version2，
即A直接依赖B和D，间接依赖C，那么这个时候Maven如何处理依赖C的版本冲突呢？

调节原则
- 原则1，声明者优先：pom文件，自上而下，谁先定义，谁就能被使用。
- 原则2，路径近者优先：直接依赖优先于传递依赖

排除依赖：使用<exclude>排除某些依赖，这个很管用。

版本锁定（**推荐使用**）
- 如果不锁定，会尝试去寻找最新的版本。
- <dependencyManagement>：这个只负责管理版本，而不负责导入依赖，make sure all the sub-module use the same version of dependency.

模块化工程
父项目是pom类型，记得发布到本地仓库中，不然子模块发布到仓库的时候可能会报错。



# Release VS snapshot 

Maven提供了两种不同类型的发布包，分别是Relaese和Snapshot。
- release是稳定的，正式的。
- snapshot是不稳定的，非正式的。

当我们依赖一个snapshot包的时候，每次构建，不管本地仓库有没有这个包，都会去远程仓库拉取。而release包，在每次构建的时候，如果本地已经有了这个包，则不会再去远程仓库拉取。

那么这两个不同点有什么各自的使用场景呢？假设我们依赖some.jar-2.1.1-snapshot.jar包，意味着，在我们构建的时候，总是会去拉取远端的包。假设这个包的维护者想要修改bug，但却不想变更包的版本，这个时候，就可以使用snapshot版本的包。当然maven提供了选择，用户可以配置snapshot拉取远程仓库的频率是always,daily, inteval, never（这个跟release的效果一样的了）。

最佳实践
- 在开发模式下，我们通过snapshot来快速迭代我们的代码，以便依赖方也能够快速的使用最新的代码进行联调。
- 当版本趋于稳定的时候，转为release发布，当然，记得将你本身的一些依赖也要转为release，全部的稳定性。
- 当我们提供的jar进入稳定状态之后，就要发布release版本而不是snapshot版本。

# scope
Scope是依赖包跟随项目的生命周期。

## provided
**编译、测试阶段**需要这个jar在对应的classpath中，
比如es插件开发，你需要依赖elasticsearch，但是运行时是es环境，已经有es了，所以你的es依赖可以是provided比较合适

再比如，我们开发一个SDK，这个SDK提供了springboot starter，所以我们需要springboot相关的包在编译、测试阶段使用，但是运行时就不必要了，因为用户在使用SDK的时候，肯定要提供springboot相关的包。

再比如servlet-api，这个只需要编译的时候提供即可，运行的时候，servlet容器会提供该包。
## import


## compile
编译、测试、运行阶段都需要这个jar在对应的classpath中。
比如我们开发一个spring web程序，那么对于spring-core，就需要编译、测试、运行时都有spring的包。

## test
只用于test，比如Junit

## runtime
比如JDBC驱动包：mysql-connector，这个只有在运行时才需要，因为它是通过SPI的方式使用的。编译阶段不需要它。

## system
本地的，maven仓库之外的包使用。比如
```xml
<dependency>
  <groupId>any</groupId>
  <artifactId>any</artifactId>
  <version>any</version>
  <scope>system</scope>
  <systemPath>${project.basedir}/path/to/the/jar</systemPath>
</dependency> 
```
- 一般使用${project.basedir}寻找jar包所在目录。
- groupId, artifactId, version 随意设置。

或者把jar包install到本地仓库之后再进行maven依赖。




# Install
发布到本地仓库：`mvn install:install-file -Dfile=hbsdk-1.0.jar -DgroupId=com.huibo.sdk -DartifactId=sdk -Dversion=1.0 -Dpackaging=jar`
eg: `mvn install:install-file -Dfile=kafka-clients.jar -DgroupId=cn.com.g7 -DartifactId=kafka-clients -Dversion=2.6.3.1 -Dpackaging=jar`


# Deploy
发布到私服：`mvn deploy:deploy-file -DgroupId=com.lefu.sdk -DartifactId=sdk -Dversion=1.0 -Dpackaging=jar -Dfile=D:\sdk-1.0.jar -Durl=http://192.168.0.202:10081/nexus/content/groups/public -DrepositoryId=nexus`

一般来说，私服都有权限管理的，于是就会有认证相关的配置：
1. 在pom.xml中设置分发信息，即分到到哪个远程仓库
```xml
<distributionManagement>
    <repository>
        <id>releases</id>
        <url>http://xxx</url>
    </repository>
    <snapshotRepository>
        <id>snapshots</id>
        <url>http://yyy</url>
    </snapshotRepository>
</distributionManagement>
```
注意id，因为仓库往往是加密的，我们还需要配置登陆这个仓库的用户名和密码。

2. 在settings.xml中配置用户名和密码
```xml
<servers>
  <server>
      <id>releases</id>
      <username>zhangsan</username>
      <password>xxx</password>
    </server>
  <server>
    <id>snapshots</id>
    <username>zhangsan</username>
    <password>xxx</password>
  </server>
</servers>
```
**id标签要对应上**，即pom.xml中有两个id标签，那么settings.xml也需要多少个id标签。

3. 密码明文不太安全，于是加密。**未经验证**

执行 `mvn –encrypt-master-password`

输入本地密码(随机密码,随便填啦)

将输出结果按如下格式 保存至 个人目录下settings-security.xml
```xml
<settingsSecurity>
    <master>{jSMOWnoPFgsHVpMvz5VrIt5kRbzGpI8u+9EF1iFQyJQ=}</master>
</settingsSecurity>
```

我的保存路径为C:\Users\G7_user\.m2\settings-security.xml

然后执行 `mvn –encrypt-password`

输入上面验证过的密码

输入结果类似{COQLCE6DU6GtcS5P=}
修改settings.xml ,类似无密码加密
```xml
<server>
    <id>repo.chinawayltd-s</id>
    <username>chensongle</username>
    <password>{COQLCE6DU6GtcS5P=}</password>
</server>
```

# Download Source code下载源码
- `mvn dependency:resolve -Dclassifier=sources`
- `mvn dependency:sources`
- `mvn dependency:resolve -Dclassifier=javadoc`


# 编译canal踩的坑：
1. 使用aliyun或者公司的mirror都无法下载某个依赖，导致无法编译；
2. 使用原始是setting.xml + 翻墙梯子，很顺利的下载所需依赖并打包成功；


# 继续上次的编译
`mvn clean install -rf :xxx`

# offline mode
`mvn clean install --offline`


# run test
```shell
mvn test -Dtest='simpleClassName'
mvn test -Dtest='simpleClassName#methodName' 
mvn test -Dtest='simpleClassName' -DskipTests=false
```

# dependency tree
go to `pom.xml` directory(root or sub-module), then `mvn dependency:tree`


# how to find out which settings.xml is currently used?
`mvn -X |grep settings`
```shell
➜  mvn -X |grep settings
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=512m; support was removed in 8.0
[DEBUG]   Imported: org.apache.maven.settings < plexus.core
[DEBUG] Reading global settings from /usr/local/Cellar/maven/3.6.0/libexec/conf/settings.xml
[DEBUG] Reading user settings from /Users/louisliu/.m2/settings.xml
```

or `mvn help:effective-settings`



