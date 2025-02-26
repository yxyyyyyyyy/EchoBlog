import mock, { Random } from "mockjs";

// 总览数据
export const overviewData = mock.mock({
  "code": 200,
  "data": {
    "file": Random.float(60, 100, 3, 3) + 'M',
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  }
})


// 访问量
export const visitData = mock.mock({
  "data|30": [
    {
      "data": "@datetime('MM-ddd')",
      "count|10-100": 12
    }
  ]
})

// 数据检测
export const pieData = mock.mock({
  "data": {
    "device": [
      {
        "key": 'mobie',
        "name": "移动端",
        "value|30-120": 50
      },
      {
        "key": 'pc',
        "name": "电脑端",
        "value|30-120": 50
      }
    ],
    "website": [
      {
        "key": 'home',
        "name": "首页",
        "value|30-120": 50
      },
      {
        "key": 'list',
        "name": "摄影",
        "value|30-120": 50
      },
      {
        "key": 'detail',
        "name": "笔记",
        "value|30-120": 50
      },
      {
        "key": 'detail',
        "name": "图库",
        "value|30-120": 50
      }
    ]
  }
})

// 评论
export const comment = mock.mock({
  "data": {
    "count": 123,
    "list|123": [{
      "id|+1": 0,
      "article": {
        "id|+1": 2,
        "title": "@ctitle(3,12)",
      },
      "user": {
        "id|+1": 3,
        "name": "@ctitle(3,12)",
        "imgurl": "https://pic1.imgdb.cn/item/67225467d29ded1a8cbba11e.jpg",
      },
      "comment": "@cparagraph(1,4)",
      "moment": "@datetime()",
      "complaint|0-12": 0
    }]
  }
})

// 文章状态
export const articleStatus = mock.mock({
  "data": [
    {
      "id": 0,
      "name": "已发布",
      "value|0-30": 4,
    }, {
      "id": 1,
      "name": "未发布",
      "value|0-30": 4,
    }
  ]
})


// 分组
export const group = mock.mock({
  "data": {
    "count": 123,
    "list|4": [{
      "id|+1": 0,
      "name": "@ctitle(2,5)",
      "value|0-30": 4,
      "moment": "@datetime()",
    }]
  }
})

// 文件数据
const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];

const photoarr = [
  ["1.jpg"],
  ["1.jpg","2.jpg"],
  ["3.jpg","4.jpg"],
  ["5.jpg","6.jpg"],
  ["3.jpg","4.jpg",'5.jpg'],
  ["1.jpg","2.jpg",'4.jpg'],
]

export const fileData = mock.mock({
  "count": 64,
  "list|64": [{
    "id|+1": 0,
    "fileName": "@ctitle(2,12)",
    "url|1": photos,
    "format": 'jpeg',
    "subsetId|0-4": 3
  }]
})

// 标签
export const labelgroup = mock.mock({
  "data": {
    "count": 123,
    "list|17": [{
      "id|+1": 0,
      "name": "@ctitle(2,5)",
      "moment": "@datetime()",
    }]
  }
})

// 博客文章
export const mkarticle = mock.mock({
  "data": {
    "count": 64,
    "list|64": [{
      "id|+1": 0,
      "title": "@ctitle(4,12)",
      "cover|1": photos,
      "moment": "@datetime()",
      "label|0-3": ["@ctitle(2,4)"],
      "introduce": "@cparagraph(1,4)",
      "views|12-429": 122,
      "comment|8-24": 12,
      "praise|8-123": 42,
      "subsetId|0-4": 0,
      "state|0-1": 0
    }]
  }
})

// mkgallery 图库数据
export const mkgallery = mock.mock({
  "data": {
    "count": 64,
    "list|64": [{
      "id|+1": 0,
      "title": "@ctitle(4,12)",
      "cover|1": photos,
      "moment": "@datetime()",
      "label|0-3": ["@ctitle(2,4)"],
      "introduce": "@cparagraph(1,4)",
      "views|12-429": 122,
      "comment|8-24": 12,
      "praise|8-123": 42,
      "subsetId|0-4": 0,
      "content|1": photoarr
    }]
  }
})

// mkdiary 图库数据
export const mkdairy = mock.mock({
  "data": {
    "count": 64,
    "list|64": [{
      "id|+1": 0,
      "title": "@ctitle(4,12)",
      "moment": "@datetime()",
      "weatherId|0-7":0,
      "content": "@cparagraph(8,10)",
      "picture|0-1": photoarr
    }]
  }
})