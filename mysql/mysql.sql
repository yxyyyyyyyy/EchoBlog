-- 用户表
CREATE TABLE if not exists `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NOT NULL comment '姓名',
  `mail` varchar(100) DEFAULT NOT NULL comment '邮箱',
  `pasword` varchar(100) DEFAULT NOT NULL comment '密码',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  `imgurl` varchar(255) DEFAULT NOT NULL comment '头像',
  PRIMARY KEY (`id`)
)

-- 分类表
CREATE TABLE if not exists `subset` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subset_name` varchar(100) DEFAULT NOT NULL comment '分类名称',
   `cLassify` INT NOT NULL comment '类型0文章1图片2资源',
  `moment` varchar(100) DEFAULT NULL comment '创建时间',
  PRIMARYKEY (`id`)
)

-- 本地文件表
CREATE TABLE if not exists `file` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL comment '地址',
  `file_name` varchar(100)  NOT NULL comment '名称',
  `format` VARCHAR(32) NOT NULL COMMENT '格式',
  `subset_id` INT COMMENT'所属分类',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  PRIMARYKEY (`id`)
)

-- 文章
CREATE TABLE if not exists `article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL comment '标题',
  `subset_id` INT COMMENT'所属分类',
   `cLassify` INT NOT NULL comment '类型0文章1图片2资源',
   `Label` VARCHAR(200) COMMENT'标签',
   `introduce` VARCHAR(1000) COMMENT '简介',
  `content`  VARCHAR(5000) COMMENT '内容',
  `cover` VARCHAR(100) COMMENT '封面地址',
  `views` INT DEFSULT 0 COMMENT '查看次数',
  `state` INT DEFSULT 0 COMMENT '文章状态',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  PRIMARYKEY (`id`)
)

-- 文章点赞
CREATE TABLE if not exists `praise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL COMMENT '用户',
  `user_type` INT NOT NULL COMMENT '查看次数',
  `article_id` INT NOT NULL COMMENT '所属文章',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  PRIMARYKEY (`id`)
)

-- 文章评论
CREATE TABLE if not exists `comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL COMMENT '用户',
  `user_type` INT NOT NULL COMMENT '用户类型',
  `user_name` VARCHAR(100) COMMENT'用户名称',
  `article_id` INT NOT NULL COMMENT '所属文章',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  `content` VARCHAR(1000) NOT NULL COMMENT '内容',
    `complaint` INT DEFSULT 0 COMMENT '举报次数',
    `isread` INT DEFSULT O COMMENT '是否已读',
  PRIMARYKEY (`id`)
)

-- 标签
CREATE TABLE if not exists `label` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label_name` VARCHAR(100) NOT NULL COMMENT '名称',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  PRIMARYKEY (`id`)
)

-- 日记
CREATE TABLE if not exists `diary` (
  `id` INT NOT NULL AUTO INCREMENT,
  `titLe` VARCHAR(200) NOT NULL COMMENT'标题',
  `content` VARCHAR(5000) NOT NULL COMMENT'内容',
  `picture` VARCHAR(500) COMMENT'图片地址',
  `weather_id` INT COMMENT'天气',
  `mood` INT DEFSULT 0 COMMENT'心情',
  `moment` VARCHAR(100) NOT NULL COMMENT'时间',
  PRIMARY KEY(id)
)

-- 天气
CREATE TABLE if not exists `weather` (
  `id` INT NOT NULL AUTO INCREMENT,
  `weather_name` VARCHAR(32) NOT NULL COMMENT'名称',
  `icon` VARCHAR(100) COMMENT'图标',
  PRIMARY KEY(id)
)

-- 私信
CREATE TABLE if not exists `message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL COMMENT '用户',
  `user_type` INT NOT NULL COMMENT '用户类型',
  `user_name` VARCHAR(100) COMMENT'用户名称',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  `content` VARCHAR(1000) NOT NULL COMMENT '内容',
  `isread` INT DEFSULT O COMMENT '是否已读',
  PRIMARYKEY (`id`)
)

-- 埋点
CREATE TABLE if not exists `record` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL COMMENT '用户',
  `user_type` INT NOT NULL COMMENT '用户类型',
  `position` VARCHAR(100) COMMENT'位置',
  `moment` varchar(100) DEFAULT NOT NULL comment '创建时间',
  `isread` INT DEFSULT O COMMENT '是否已读',
  PRIMARYKEY (`id`)
)