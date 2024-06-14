# 命令速查

## 代码提交和同步代码

- `git add` 变为已暂存的状态

``` bash
git status 
git add --all # 当前项目下所有的更改
git add . # 当前目录下所有的更改
git add xx/xx.js xx/xx.css  # 指定文件
```

- `git commit` 提交代码

``` bash
git commit -m "xxx" # 提交代码
```

- `git push` 变为已推送的状态

``` bash
git push -u origin master # 第一次推送需要关联远端
git push 
git branch # 查看本地代码的分支
git branch -a # 可以查看本地仓库和本地远程仓库(远程仓库的本地镜像)的所有分支
```

## 代码撤销和撤销同步

- 已修改，但未暂存

``` bash
git diff # 列出所有的修改
git diff xx/xx.js xx/xx2.js # 列出某几个文件的修改
git checkout # 撤销项目下所有的修改
git checkout xx/xx.js xx/xx2.js # 撤销某几个文件的修改
git clean -f # untracked状态，撤销新增的文件
git clean -df # untracked状态，撤销新增的文件和文件夹
```

- 已暂存，未提交

``` bash
git diff --cached # 显示暂存区和本地仓库的区别
git reset # 暂存区的修改恢复到工作区
git reset --soft # 与 git reset 等价，回到已修改状态，修改的内容仍在工作区内
git reset --hard # 回到未修改的状态，清空暂存区和工作区
```

- 已提交，未推送
``` bash
git diff <branch1> <branch2> # 显示两个分支的区别
git diff master origin/master # 显示本地与远端的区别
git reset --hard origin/master # 回到远端的master分支
git reset --hard HEAD^ # 回退到本地仓库的上一个版本
git reset --hard <hash code> # 回退到指定版本
git reset --soft/git reset # 回退且回到已修改状态，修改的内容仍在工作区内
```

- 已推送到远端
``` bash
git push -f origin master # 强制覆盖远程分支
git push -f # 如果之前已与远端关联，则无需分支名
```

## 其他常用命令

- 关联远端仓库
``` bash
git init # 初始化本地仓库
git remote add <name> <git-repo-url> # 添加远程仓库
git remote add <name> <another-git-repo-url> # 添加多个远程仓库
git remote -v # 查看远程仓库
git clone <git-repo-url> # 克隆远程仓库
git remote set-url origin <git-repo-url> # 修改远程仓库
```

- 切换分支
``` bash
git checkout -b <branch-name> # 创建分支并切换
git branch # 查看本地分支
git branch -a # 查看本地分支和远程分支
git checkout <branch-name> # 切换分支
git merge <branch-name> # 合并分支
git push origin <branch-name> # 推送分支
git pull origin <branch-name> # 拉取分支
```

- 本地有修改，但我想先 pull
``` bash
git stash # 临时保存修改
git pull origin master # 拉取远程分支
git stash pop # 恢复修改
```

- 撤销操作
``` bash
git checkout <filename> # 恢复暂存区指定文件到工作区
git checkout . # 恢复暂存区所有文件到工作区
git reset <filename> # 重置暂存区的某文件，与上次 commit 保持一致，但工作区不变
git reset --hard <filename> # 重置暂存区与工作区，与上次 commit 保持一致
git revert <commit hash code> # 去掉某个 commit, 实质上是新建了一个与原来完全相反的 commit,抵消了原来 commit 的修改

git reflog # 查看最近操作记录
git reset --hard HEAD{5} # 恢复到前 5 次提交
git pull origin backend-log # 再次拉取代码
```

- 版本回退与前进

``` bash
git log # 查看历史版本
git log --graph --decorate --abbrev-commit --all # git log 优雅版
git checkout <hash> # 检出到任意版本
git push origin master --force  # 远程仓库的版本很新，但是你还是想用老版本覆盖
git rebase -i HEAD~4 # 多个 commit 合并为一个

```