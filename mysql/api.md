## 用户登录
地址 : /sign

```typescript
// 请求
export type signin = {
	name: string;
	psw: string;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
		id: number;
		name: string;
		imgurl: string; //touxiang
		token: string
	}
}
```

## 总览数据

地址 : /overview

```typescript
// 请求
export type overview = {
	token: string;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	file: string;
    	atricle: number;
    	gallery:number;
    	diary:number;
	}
}
```



## 访问量

地址 : /visits

```typescript
// 请求
export type visits = {
	token: string;
    length: number // 时间长度
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	data: string; //日期
    	count: number;
	}
}
```



## 数据监测

地址 : /survey

```typescript
// 请求
export type survey = {
	token: string;
    length: number // 时间长度
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
        device:{ //不同设备
    		key:'mobile'|'pc';
    		value: number;
    	}[],
     	 website:{ //不同设备
    		key:'file'|'blog'|'gallery'|'diary';
    		value: number;
    	}[],
    	data: string; //日期
    	count: number;
	}
}
```



## 评论

地址 : /comment

```typescript
// 请求
export type comment = {
	token: string;
    pageSize: number;
    nowPage: number;
    count?:boolean;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
    	list:{
    		id: number;
    		atricle?:{
    			id: number;
    			title: string;
			};
			user:{
                id: string|number;
                name: string;
                imgurl: string;
            };
			comment: string;//内容
			moment:string;//时间
			complaint:number;//举报数
		}[];
	}
}
```

## 私信

地址 : /message

```typescript
// 请求
export type message = {
	token: string;
    pageSize: number;
    nowPage: number;
    count?:boolean;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
    	list:{
    		id: number;
			user:{
                id: string|number;
                name: string;
            };
			comment: string;
			moment:string;
		}[];
	}
}
```

## 文章/文章搜索

地址 : /aritcle

```typescript
// 请求
export type aritcle = {
	token: string;
    pageSize: number;
    nowPage: number;
    state?:number; //状态
    subsetId?: number;//分组
    serchTerm?:string|number;//搜索词条
    count?:boolean;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
    	list:{
    		id: number;
    		title:string;
    		subsetId?: number;//分组
    		moment:string;
    		label?:string[];
			introduce?:string;//简介
             cover?:string;//封面地址
			views:number;//查看次数
			state:number;//状态0未发布、1已发布
			comment:number;
			praise:number;//点赞次数
		}[];
	}
}
```

## 文章发布/文章撤回

地址 : /changeAritcleState

```typescript
// 请求
export type changeAritcleState = {
	token: string;
    articleId: number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
	}
}
```

## 文章删除

地址 : /deleteAritcle

```typescript
// 请求
export type deleteAritcle = {
	token: string;
    articleId: number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
	}
}
```

## 文章状态(已发布,未发布)

地址 : /articleState

```typescript
// 请求
export type articleState = {
	token: string;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	id: number;
    	name: '已发布'|'未发布';
		value: number;
	}[];
}
```

## 分组(=分类)

地址 : /subset

```typescript
// 请求
export type subset = {
	token: string;
    classify: number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count?: number;
    	list:{
    		id: number;
    		name: string;
    		value:number;//数据总数
    		moment:string;//时间
		}[];
	}
}
```

## 新建分组

地址 : /addSubset

```typescript
// 请求
export type subset = {
	token: string;
    classify: number;
    subsetName: string|number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 修改分组

地址 : /updateSubset

```typescript
// 请求
export type updateSubset = {
	token: string;
    classify: number;
    subsetName: string|number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 删除分组

地址 : /deleteSubset

```typescript
// 请求
export type deleteSubset = {
	token: string;
    classify: number;
    subsetName: string|number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 标签

地址 : /label

```typescript
// 请求
export type label = {
	token: string;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
    data:{
    	id: number;
    	name:string|number;
    	moment:string;
	}[];
}
```



## 新建标签

地址 : /addLabel

```typescript
// 请求
export type addLabel = {
	token: string;
    labelName: string|number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 删除标签

地址 : /deleteLabel

```typescript
// 请求
export type deleteLabel = {
	token: string;
    labelId: number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 文件

地址 : /file

```typescript
// 请求
export type file = {
	token: string;
    pageSize: number;
    nowPage: number;
    subsetId?:number;//分组
    count?:boolean;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
    data?:{
    	count?:number;
    	list:{
    		id: number;
    		url:string;//地址
    		fileName:string;//文件名
    		format:string;//格式
    		subsetId?:number;//所属类型
		}[];
	}
}
```

## 文件上传

地址 : /uploadFile

```typescript
// 请求
export type uploadFile = {
	token: string;
    formDate: new FormDate()
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
    data?:{
    	id: number;
    	url:string;//地址
    	fileName:string;//文件名
    	format:string;//格式
    	subsetId?:number;//所属类型
	}
}
```



## 文件删除

地址 : /deleteFile

```typescript
// 请求
export type deleteFile = {
	token: string;
     files:number | number[];
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 文件移动

地址 : /removeFile

```typescript
// 请求
export type removeFile = {
	token: string;
     files:number | number[];
    subsetId?:number;//所属分组
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```

## 图库/图库搜索

地址 : /gallery

```typescript
// 请求
export type gallery = {
	token: string;
    pageSize: number;
    nowPage: number;
    subsetId?:number;//分组
    count?:boolean;
    serchTerm?:string|number;//搜索词条
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
    	list:{
    		id: number;
    		title:string;
    		subsetId?: number;//分组
    		moment:string;
			introduce?:string;//简介
             cover?:string;//封面地址
			views:number;//查看次数
			comment:number;
    		content:string[];//图片内容
			praise:number;//点赞次数
		}[];
	}
}
```

## 图库删除

地址 : /deletegallery

```typescript
// 请求
export type deletegallery = {
	token: string;
    articleId:number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 日记/日记搜索

地址 : /diary

```typescript
// 请求
export type diary = {
	token: string;
    pageSize: number;
    nowPage: number;
    count?:boolean;
    serchTerm?:string|number;//搜索词条
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
	data?:{
    	count: number;
    	list:{
    		id: number;
    		title:string;
    		moment:string;
			weatherId:string;//天气
    		content:string;
    		picture?:string[];
		}[];
	}
}
```

## 日记删除

地址 : /deletediary

```typescript
// 请求
export type deletediary = {
	token: string;
    diaryId:number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 文章/图库新建

地址 : /createArticle

```typescript
// 请求
export type createArticle = {
	token: string;
    title:string;
    subsetId?:number;
    classify:number;
    label?:string[];
    introduce?:string;
    content?:string;
    cover?:string;
    state?:number;
    moment:string,
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 获取文章/图库

地址 : /gainArticle

```typescript
// 请求
export type gainArticle = {
	token: string;
    articleId:number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
    data:{
    	id:number;
        title:string;
        subsetId?:number;
        label?:string[];
        introduce?:string;
        content?:string;
        cover?:string;
	}
}
```

## 修改文章/图库

地址 : /updateArticle

```typescript
// 请求
export type updateArticle = {
	token: string;
    title:string;
    subsetId?:number;
    classify:number;
    label?:string[];
    introduce?:string;
    content?:string;
    cover?:string;
    state?:number;
    moment:string,
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 新建日记

地址 : /creatediary

```typescript
// 请求
export type creatediary = {
	token: string;
    title:string;
    content:string;
    picture?:string[];
    weatherId:number;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
}
```



## 天气

地址 : /weather

```typescript
// 请求
export type weather = {
	token: string;
}

// 返回数据
res = {
	code: number; // 200正常、300未通过token验证、500错误、400功能拒绝
    data:{
    	id:number;
    	name:string;
    	icon:string;
	}[];
}
```



