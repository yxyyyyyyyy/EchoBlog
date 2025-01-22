import { defineStore } from 'pinia'
import type {GroupData} from '../components/langue/index'

export const useCounterStore = defineStore('subset', {
    state: () => {
        return {
            count:0,
            data:[] as GroupData[]
        }
    },
    getters: {
        exclude: (state) => {
            let arr = []
            let n = state.count
            // all id计算 计算未分组数量
            for(let i = 0 ; i < state.data.length ; i++){
                arr[i] = state.data[i].id
                n = n- state.data[i].value
            }
            return {id:arr.join(',') , name: "未分类" , value :n}
        }
    },
  })