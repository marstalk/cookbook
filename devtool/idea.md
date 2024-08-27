# 快捷键

直接切换为`IDEA Classic`，适合Mac和Windows两个系统。

- command+CTRL+F  可以在整个工程或着某个目录下面查找变量   相当于eclipse里的ctrl+H

- command+alt+f7 这个是查找选中的字符在工程中出现的地方，可以不是方法变量类等，这个和上面的有区别的
- command＋F7可以查询当前元素在当前文件中的引用，然后按F3可以选择 ，功能基本同上
- 选中文本，按command+shift+F7 ，高亮显示所有该文本，按Esc高亮消失。
- alt+enter 导入包，自动修改

- keymap 设置 MAC OS X 10.5+
- alt+f7查找变量方法使用的地方 
- F3添加书签
- Ctrl + O快捷覆写方法
- Alt + F3 添加书签标识
- command + F3 显示书签
- command + Shift + A 查找动作
- Alt + F1 快捷选择

- 选中文本，按Alt+F3 ，逐个往下查找相同文本，并高亮显示。shift+f3就是往上找
- ctrl+enter 出现生成get,set方法的界面
- shift+enter 换到下一行
- command+R 替换
- command+shift+R 可以在整个工程或着某个目录下面替换变量
- command+control+R 运行当前工程
- command+Y 查看选中当前源码
- command+D复制一行
- command+delete删除一行
- control+shift+J 把多行连接成一行，会去掉空格的行
- command+J 可以生成一些自动代码，比如for循环
- command+B 找变量的来源  同F4   查找变量来源
- control+shift+B 找变量所属的类
- command+G 查找变量并且定位

- alt+shift+C 最近修改的文件
- command+E最近打开的文件

- command+alt+L 格式化代码
- command+alt+I 自动缩进，不用多次使用tab或着backspace键，也是比较方便的
- command+shift+enter代码补全，这个会判断可能用到的，这个代码补全和代码提示是不一样的
- command+P 方法参数提示
- command+alt+T 把选中的代码放在 TRY{} IF{} ELSE{} 里
- command+X剪切
- command+shift+V 可以复制多个文本
- command+shift+U 大小写转换
- command+/ 注释一行或着多行 //
- command+alt+/ 注释/*...*/
- command+alt+左右箭头 返回上次编辑的位置
- command+左右箭头 返回最左边最右边
- shift+f6重命名
- command+shift+上下箭头 把代码上移或着下移
- command+[或]  可以跳到大括号的开头结尾
- command+f12可以显示当前文件的结构
- command+alt+B 可以导航到一个抽象方法的实现代码
- command+, 呼出偏好设置
- command+c, command+f, command+g查找当前相同代码。
- control + J, 查看doc


# Tips
- When we create a new Project, the Location Path is the root path of the project，And we name the flolder with the same name as project name.
- IDea global configuration for all projects: File > New Project Settings
- 创建新的module的时候，如果是maven工程，则：quick是普通项目，helloworld是web项目

# Invalidate Caches
遇到什么乱七八糟的问题都可以试一试这个

# Debug Remotely
[Tutorial: Remote debug | IntelliJ IDEA](https://www.jetbrains.com/help/idea/tutorial-remote-debug.html)

# Plugins
- lombok
- P3C
- FindBugs-IDEA
- GsonFormat
- Maven Helper
- SequenceDiagram
- Ledis redis

# 无法下载源码的问题
- 异常1：`connection refused`，可以删除项目根目录下的.idea文件夹，然后右键项目名称 > Maven > Reload Project
- 异常2：`idea Sources not found for`，则使用以下命令下载源码：<br>
```base
mvn dependency:resolve -Dclassifier=sources
```

另外，可以修改maven配置：Preference > Build,Execution,Deployment > Build Tools > Maven > Importing > Automatically download: +Sources,+Documentation, +Annotations

# Start IntelliJ IDEA from the command line
Open IntelliJ IDEA, go to Tools->Create Command-Line Launcher..., then bress RETURN.
OR you can:
```bash
ll /Applications |grep idea
vim /usr/local/bin/ideace
echo 'open -na "IntelliJ IDEA CE.app" --args "$@"' > /usr/local/bin/ideace
sudo chmod +x /usr/local/bin/ideace
ideace /path/to/project
```