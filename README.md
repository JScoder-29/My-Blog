# my-blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





# 前台功能

### 首页
1 选项卡(主页  技术  生活  健康  关于我)
2 背景视差滚动(中央嵌字 passion)
3 右下角功能标签(回到顶部 主题切换 music)
4 文章展示(全部文章时间倒序)
    文章包括标题，图片，描述，分类标签，时间
5 热门文章(右边栏)

### 分类页面
1 分类文章展示
2 热门文章(右边栏)

### 文章详情页
1 文章详情
2 评论列表
3 发布评论

### 登陆页面

### 注册页面



# 后台功能

### 管理员管理(超级管理员和普通管理员)

### 用户管理(暂时不写)

### 文章分类标签管理

### 文章管理

### 评论管理

### 系统管理(logo title)




# 数据库管理

### 管理员表(admin)
1 id
2 username
3 password
4 status

### 文章分类表
1 id
2 name
3 keywords
4 description

### 文章表(blog)
1 id
2 cid 所属分类
3 title
4 img
5 author
6 time
7 description 文章简介
8 text 文章正文
9 num 浏览量