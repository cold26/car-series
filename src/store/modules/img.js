import {getImgList} from '@/services/index'


const state ={
    list:[],
    yearCar:"",
    colorName:'',
    colorId:'',
    carId:''
}
//同步操作
const mutations = {
    imageList(state,payload){
        state.list = payload.data.data.map(item=>{
            item.List = item.List.map(val=>{
                val.Url = val.Url.replace("{0}",3)
                return val
            })
            return item
        })
    },
    updateYearCar(state,payload){
        state.yearCar = `${payload.market_attribute.year}款${payload.car_name}`
        state.carId = payload.car_id

    },
    updateColorName(state,payload){
        state.colorName = payload.Name

        state.colorId = payload.ColorId

    }
}
//异步
const actions = {
    async getImageList({commit,state},payload){
        let params = {SerialID:payload};
        if(state.colorId){
            params.ColorID = state.colorId
        }
        if(state.carId){
            params.CarId = state.carId
        }
        let res = await getImgList(params)

        commit('imageList',res)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}