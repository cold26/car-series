import {getDetailList} from '@/services/index'

function sortCarList(list){
    // 排序规则 排量升序 && 功率升序 && 自然吸气>涡轮增压
    list.sort((a, b)=>{
        if (a.exhaust_str == b.exhaust_str){
            if (a.max_power_str == b.max_power_str){
                return b.inhale_type > a.inhale_type;
            }else{
                return a.max_power - b.max_power;
            }
        }else{
            return a.exhaust - b.exhaust;
        }
    })
    return list;
}

function formatCarList(list){
    // 拼接每款车的 排量/功率 和 吸气方式
    list = list.map(item=>{
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
    })
    let newList = [];
    
    // 遍历，根据key把数据聚合
    list.forEach(item=>{
        let index = newList.findIndex(value=>value.key == item.key);
        if (index !== -1){
            newList[index].list.push(item);
        }else{
            newList.push({
                key: item.key,
                list: [item]
            })
        }
    })
    return newList;
}

const state = {
    list:{},//原数据
    currentList:[],
    year:["全部"],
    current:'全部'
}
//同步操作
const mutations = {
    updateDetailList(state,payload){
        state.list = payload.data.data
        console.log(payload)
        console.log(state.list)
        let year = state.list.list.map(item=>item.market_attribute.year);
        //去重之后合并state的数据
        state.year = state.year.concat([...new Set(year)])
        console.log(state.year)

        let currentList = [];
        if (state.current == '全部'){
            currentList =state.list.list;
        }else{
            currentList = state.list.list.filter(item=>item.market_attribute.year == state.current);
        }


        currentList = sortCarList(currentList);

        currentList = formatCarList(currentList);

        state.currentList = currentList;
        console.log("11111111",state.currentList)
    },
   
}

//异步操作
const actions = {
    async getDetailList({commit},payload){
        let res = await getDetailList(payload);
        commit('updateDetailList',res)
    }
}



export default {
    state,
    mutations,
    actions,
    namespaced: true
}