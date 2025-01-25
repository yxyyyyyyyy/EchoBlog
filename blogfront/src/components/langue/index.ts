import PrivateMessage from "./PrivateMeaasge.vue";
import Comments from "./Comments.vue";
export { PrivateMessage, Comments };

// 数据规范
export type CommentsItemProps = {
    pageSize: number
}

export type ReplyData = {
    id: number,
    comment: string,
    moment: string,
    user: {
        id: string | number,
        name: string,
        imgurl: string
    },
    article?: {
        id: number,
        title: string
    },
    complaint?: number
}

export type replyProps = {
    content?: ReplyData,
    isComment: boolean;
}

// 分组
export type GroupData = {
    id: number|string,
    name: string|number,
    value: number
}