# Git cherry-pick

## 基本用法

### 作用：
将制定的提交（们）应用于其他分支。

### 命令：
```bash
git cherry-pick <commitHash>
```
### 使用
假设我们现在有两个分支：`feature`、`master`。

feature 分支处于开发状态，有多个已提交的改动，这些改动中有的功能尚未完善，而有的仅仅是优化或者 bugfix。我们想要基于 `master` 分支做一次版本更新，但又希望本次更新中包含 feature 分支中的优化/bugfix 修改。<br>
~~总不能照着`feature`再写一遍吧？（知道这个命令之前我就是这么做的 5555555)~~

**ok，talk is cheap, show me the code.**

```bash
# 切换到 master 分支，需要往哪个分支合并，就切换到哪个分支谢谢
$ git checkout master

# Cherry pick 操作, 这个f 就是我们需要合并过来的优化/bugfix 提交的哈希值
$ git cherry-pick f
```

✨ tips: 不用`hash`值，直接使用分支名也行，就代表合并该分支最近一次的提交。

### 转移多个提交
如果我们需要一次转移多个提交咋办？很简单，多个 `hash`值用空格隔开就可以了。

```bash
$ git cherry-pick <HashA> <HashB>
```

### 转移连续的提交

```bash
$ git cherry-pick <HashA>..<HashC>
```
tips: 这种写法的范围是前开后闭 `(A, C]` <br>

如果希望是完全闭区间，命令如下：

```bash
$ git cherry-pick <HashA>^..<HashC>
```

## 配置项