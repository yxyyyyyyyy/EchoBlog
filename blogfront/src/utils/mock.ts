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
