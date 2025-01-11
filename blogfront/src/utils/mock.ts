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