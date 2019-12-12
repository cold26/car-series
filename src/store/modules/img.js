import {getImgList,getPictureList} from '@/services/index'


const state ={
    list:[],//img页面的列表数据
    yearCar:"",//车款名字
    colorName:'',//颜色名字
    colorId:'',//颜色id
    carId:'',//车款id
    Page:1,//第一页,
    PageSize:30,//每页条数
    ImageID:'',//分类ID(空间，外观，内饰，官方)
    pictureList:[],//picture图片列表
    Count:'',//设置总条数
    current:0,//轮播的当前图片
    SerialID:''
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
    //车款名字和id赋值
    updateYearCar(state,payload){
        state.yearCar = `${payload.market_attribute.year}款${payload.car_name}`
        state.carId = payload.car_id

    },
    //颜色名字和id赋值
    updateColorName(state,payload){
        state.colorName = payload.Name
        state.colorId = payload.ColorId
    },
    // 设置图片的id
    setImageId(state,payload){
        state.ImageID = payload.Id
    },
    // 给图片列表的数组赋值
    setPictureList(state,payload){
        
        state.Count = payload.Count
       

        payload.ImageID && (state.ImageID = payload.ImageID);
  
        if (state.Page == 1){
            state.pictureList = payload.List.map(item=>{
                item.Url = item.Url.replace("{0}",3);
                return item
            });
        }else{
            state.pictureList = state.pictureList.concat(payload.List).map(item=>{
                item.Url = item.Url.replace("{0}",3);
                return item
            });
        }
   

    },
     // 修改当前分页
     setPage(state, payload){
        state.Page = payload;
    },
    //改变轮播的下标
    setCurrent(state, payload){
        state.current = payload;
    },
    //把SerialID赋值
    setSerialID(state,payload){
        state.SerialID = payload
    }
}
//异步操作
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
    },
    //图片页面的列表
    async getPictureList({commit,state},payload){
        if (payload){
            commit('setPage', payload);
        }
       
        let params = {
            SerialID: state.SerialID,
            ImageID: state.ImageID,
            Page: state.Page,
            PageSize: state.PageSize
        }

        console.log(params,"params...")
        let res = await getPictureList(params)
        commit('setPictureList',res.data.data)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}