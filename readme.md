# Introduction
Guide hướng dẫn sử dụng Git.Những khái niệm cơ bản của git nên tìm hiểu: git clone, git commit, git push, git pull, git fetch, git branch, git remote

Guide to use Git. Some basic concept should be investigated: git clone, git commit, git push, git pull, git fetch, git branch, git remote
 

[Atlassian Git cheat sheet](https://drive.google.com/open?id=1az95gNa71g5epiu2BL8pskhROyFmA6a3) 

[Gitlab Git cheat sheet](https://drive.google.com/file/d/1kPsYJv5byAh-nos6tXcIHZvwBr54UG6X/view?usp=sharing)

## Prerequisites
Đã cài đặt git command line
Installed git command line


## Step by step
Clone 1 project 
```
git clone https://github.com/TruongDam/gtut.git
```
Sau khi clone, check branch hiện tại của source
After clone project, check current branch
```
git branch
```
=> Output: branch master

Sau khi tạo edit, add các file
After creating and editing some files. We should add file into staging area
```
git status
git add --all 
or
git add index.js/ *.js/ folder
git commit -m "commit file"
```
Sau đó check lại sự thay đổi từ repository
Then, pull from to remote repo and check conflict.

```
git pull origin master
```
Chỉnh sửa nếu có conflict. Thực hiện thao tác `git add`, `git commit`, `git pull` lại lần nữa
Sau khi check không có conflict, thực hiện

Modify and fix conflict if necessary. Then `git add`, `git commit`, `git pull` again.
```
git push origin master
```

## Kiểm tra source trên repository có khác với local hay không
Tại branch đó, fetch source từ origin về
```
git fetch origin
```
Kiểm tra source tại branch hiện tại với source tại origin/master
```
git diff origin/master
```
Merge source tại branch hiện tại với source trên remote origin/master
```
git merge origin/master
```
## Hiểu về origin master, origin/master
origin master : tức trên remote có tên origin, có nhánh master
origin/master : tức trên local có nhánh origin/master
[link](https://stackoverflow.com/questions/10588291/git-branching-master-vs-origin-master-vs-remotes-origin-master/10588561)

```
git remote show origin
```


Hướng dẫn này được sử dụng cho branch master

## Undo commit, and save change file into stash, move them to other branch
```
git reset --soft HEAD~1
git reset <filename>
git stash clear
git stash 
git checkout <branch>
git stash pop
```
## How to show stash list
```
git stash list
git stash show -p stash@{0}
```


