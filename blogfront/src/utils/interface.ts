export interface FileDataType {
    id: number;
    url:string;//地址路径
    fileName:string;//文件名
    format: string;//格式
    subsetId:number;//所属类型
    selected?:boolean;//是否选择
}

export type CommentsItemProps = {
    pageSize: number
}

export interface LabelItem  {
    id: string|number;
    name: string|number;
}