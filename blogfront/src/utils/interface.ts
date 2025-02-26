export interface FileDataType {
    id: number;
    url: string;//地址路径
    fileName: string;//文件名
    format: string;//格式
    subsetId: number;//所属类型
    selected?: boolean;//是否选择
}

export type CommentsItemProps = {
    pageSize: number
}

export interface LabelItem {
    id: string | number;
    name: string | number;
    moment: string;
}

export interface AericleDate {
    id: number;
    title: string;
    subsetId?: number;
    moment: Date;//时间
    label?: string[];
    introduce?: string;//简介
    cover?: string;//封面地址
    views: number;//查看次数
    state: number;//状态0未发布、1已发布
    comment: number;
    praise: number;//点赞次数
}


export interface GalleryDate {
    id: number;
    title: string;
    subsetId?: number;
    moment: Date;//时间
    label?: string[];
    introduce?: string;//简介
    cover?: string;//封面地址
    views: number;//查看次数
    state: number;//状态0未发布、1已发布
    comment: number;
    praise: number;//点赞次数
}
