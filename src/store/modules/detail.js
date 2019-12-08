import {getDetailList} from '@/services/index'

function sortCarList(list){
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
        let year = state.list.list.map(item=>item.market_attribute.year);
        //去重
        state.year = [...new Set(state.year.concat([...new Set(year)]))]

        let currentList = [];
        if (state.current == '全部'){
            currentList =state.list.list;
        }else{
            currentList = state.list.list.filter(item=>item.market_attribute.year == state.current);
        }

        // 排序规则 排量升序 && 功率升序 && 自然吸气>涡轮增压    
        currentList = sortCarList(currentList);

        currentList = formatCarList(currentList);

        state.currentList = currentList;
    },
    tabDetailList(state,payload){
        console.log(payload)
        state.current=payload
    }
   
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