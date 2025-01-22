import mock, { Random } from "mockjs";

// 总览数据
export const overviewData = mock.mock({
  "code":200,
  "data":{
    "file":Random.float(60,100,3,3)+'M',
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  }
})


// 访问量
export const visitData = mock.mock({
  "data|30":[
    {
      "data":"@datetime('MM-ddd')",
      "count|10-100": 12
    }
  ]
})

// 数据检测
export const pieData = mock.mock({
  "data":{
    "device":[
      {
        "key": 'mobie',
        "name": "移动端",
        "value|30-120":50
      },
      {
        "key": 'pc',
        "name": "电脑端",
        "value|30-120":50
      }
    ],
    "website":[
      {
        "key": 'home',
        "name": "首页",
        "value|30-120":50
      },
      {
        "key": 'list',
        "name": "摄影",
        "value|30-120":50
      },
      {
        "key": 'detail',
        "name": "笔记",
        "value|30-120":50
      },
      {
        "key": 'detail',
        "name": "图库",
        "value|30-120":50
      }
    ]
  }
})

// 评论
export const comment = mock.mock({
  "data":{
    "count": 123,
    "list|123":[{
      "id|+1": 0,
      "article":{
        "id|+1":2,
        "title": "@ctitle(3,12)",
      },
      "user":{
        "id|+1": 3,
        "name": "@ctitle(3,12)",
        "imgurl": "https://pic1.imgdb.cn/item/67225467d29ded1a8cbba11e.jpg",
      },
      "comment":"@cparagraph(1,4)",
      "moment": "@datetime()",
      "complaint|0-12":0
    }]
  }
})

// 文章状态
export const articleStatus = mock.mock({
  "data":[
    {
      "id": 0,
      "name": "已发布",
      "value|0-30": 4,
    },{
      "id": 1,
      "name": "未发布",
      "value|0-30": 4,
    }
  ]
})


// 分组
export const group = mock.mock({
  "data":{
    "count": 123,
    "list|4":[{
      "id|+1": 0,
      "name": "@ctitle(2,6)",
      "value|0-30": 4,
    }]
  }
})