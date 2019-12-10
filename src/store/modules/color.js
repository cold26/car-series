<<<<<<< HEAD
import { getcolor } from '@/services/index'

const state = {
    obj: {},
    list: []
}

const mutations = {                    //对象变数组
    updateList(state, payload) {
        state.obj = payload.data;
        let list = [];         //先声明一个空数组
        Object.keys(state.obj).forEach(item => {//Object.keys可以将小括号里的对象的键值拿出来放到一个数组里，然后进行遍历，空数组
            list.push({ key: item, colorList: state.obj[item] })//里push成可以遍历的数据，对象【键】就拿得到值
        })
        list.sort((a,b)=>{
            return b.key-a.key
        })
        state.list = list
        console.log(state.list, "state.list")
    }
}

const actions = {
    async getcolor({ commit }, payload) {
        console.log(payload, 111111111)
        let res = await getcolor(payload);
        console.log('res...', res.data);
        commit('updateList', res.data);
=======
import {getModelImageYearColor} from '@/services/index'


const state ={
    obj:{},
    list:[],
}
//同步操作
const mutations = {
    colorList(state,payload){
        state.obj = payload.data.data
        let list = [];
        Object.keys(state.obj).forEach(function(key){
            list.push({key,color:state.obj[key]})
        })
        list.sort(function(a,b){
            return b.key - a.key
        })
        

       state.list = list
    //    console.log(state.list,"11111111111")
    }
}
//异步操作
const actions = {
    async getModelImageYearColor({commit},payload){
        let res = await getModelImageYearColor(payload)
        commit('colorList',res)
>>>>>>> zyh
    }
}

export default {
<<<<<<< HEAD
    namespaced: true,
    state,
    mutations,
    actions
=======
    state,
    mutations,
    actions,
    namespaced:true
>>>>>>> zyh
}