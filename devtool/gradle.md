# gralde home
set `GRADLE_HOME` to system path to indicate the gradle install folder, including the /bin

# user home
indicate the folder used to place temp/dependency/daemon or gradle wrapper files, including the /caches/etc.
- Global Level: set `GRADLE_USER_HOME` to system path.
- Project Level: add `org.gradle.user.home=D:/GradleUserHome` to `gradle.properties`
- Build Level: `gradle build --gradle-user-home D:/GradleUserHome`
- Gradle-wrapper: add `org.gradle.user.home=D:/GradleUserHome` to `gradle/wrapper/gradle-wrapper.properties`


# 加速
- 全局修改

在用户主目录/.gradle下新建或者修改文件init.gradle
```gradle
allprojects { // 注意要 allprojects 下
    repositories {
        // 全局生效，优先级高于 build.gradle，增加下面一项使用国内镜像源
        maven { url 'https://maven.aliyun.com/repository/public/' }
        mavenLocal()
    }
}
```


项目修改：
直接修改项目中的build.gradle
```
// 单模块项目
repositories {
    // 当前项目生效，增加下面一项镜像源即可
    maven { url 'https://maven.aliyun.com/repository/public/' }
    mavenCentral()
}
// 如果是多模块的 Gradle 项目，则使用下面的配置，注意要 allprojects 下
allprojects {
  repositories {
    // // 当前项目生效，增加下面一项镜像源即可
    maven { url 'https://maven.aliyun.com/repository/public/' }
  }
}
```

# network proxy

1. project level: `gradle.properties`
```
systemProp.http.proxyHost=yyy
systemProp.http.proxyPort=xxx
systemProp.https.proxyHost=yyy
systemProp.https.proxyPort=xxx
```

