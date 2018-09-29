# Project title
Hướng dẫn việc sử dụng git basic
[Atlassian Git cheat sheet](https://drive.google.com/open?id=1az95gNa71g5epiu2BL8pskhROyFmA6a3)
[Gitlab Git cheat sheet](https://drive.google.com/file/d/1kPsYJv5byAh-nos6tXcIHZvwBr54UG6X/view?usp=sharing)

## Prerequisites
Đã cài đặt git command line

## Step by step
Clone 1 project 
```
git clone https://github.com/TruongDam/gtut.git
```
Sau khi clone, check branch của source
```
git branch
```
=> Check branch hiện tại là master
Sau khi tạo edit, add các file
```
git status
git add --all 
or
git add index.js/ *.js/ folder
git commit -m "commit file"
```
Sau đó check lại sự thay đổi từ repository

```
git pull origin master
```
Chỉnh sửa nếu có conflict. Thực hiện thao tác git add, git commit, git pull lại lần nữa
Sau khi check không có conflict, thực hiện
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
[a link](https://stackoverflow.com/questions/10588291/git-branching-master-vs-origin-master-vs-remotes-origin-master/10588561)

```
git remote show origin
```


Hướng dẫn này được sử dụng cho branch master


