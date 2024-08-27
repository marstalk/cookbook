# pip版本太低，升级pip异常
ip2升级报错
报错

Collecting pip
  Using cached https://files.pythonhosted.org/packages/52/e1/06c018197d8151383f66ebf6979d951995cf495629fc54149491f5d157d0/pip-21.2.4.tar.gz
    Complete output from command python setup.py egg_info:
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "c:\users\tzzha\appdata\local\temp\pip-build-nzbfrv\pip\setup.py", line 7
        def read(rel_path: str) -> str:
                         ^
    SyntaxError: invalid syntax

    ----------------------------------------
Command "python setup.py egg_info" failed with error code 1 in c:\users\tzzha\appdata\local\temp\pip-build-nzbfrv\pip\
You are using pip version 8.1.2, however version 21.2.4 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.
 

解决方法
原因：
一开始我是想自然pip无法安装，那么我就试一下手动安装。结果仍然是这个问题。但是问题已经定位，可是我仍然不知道如何解决，查阅了一下百度发现，这种情况可能是版本升级跨度较大，低级版本无法直接升级到高级版本，也就是下面圈起来的一行，执行报错。

解决：百度给了一种思路，可以尝试安装距离想要安装较近的版本，因此我们选择20版本，距离21较近。
python -m pip install --user --upgrade pip==20.2.4  #(换成你想要的版本编号)
1
如果不可以也可以手动安装，

wget https://files.pythonhosted.org/packages/0b/f5/be8e741434a4bf4ce5dbc235aa28ed0666178ea8986ddc10d035023744e6/pip-20.2.4.tar.gz  #下载安装包
tar -zxvf pip-20.2.4.tar.gz  # 解压
cd pip-20.2.4/
sudo python setup.py install #给予权限不然可能安装失败
pip install -U pip #再次更新

# 