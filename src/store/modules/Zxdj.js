import {nashuju} from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
        state.list = payload; 
    }
}

const actions = {
    async  nashuju({commit}, payload){
<<<<<<< HEAD
        console.log("22222222",payload)
          
        let res = await nashuju({cityId:payload.cityId,carId:payload.carId});
        console.log('11111111111111111111111111111111111111', res.data.data);
        commit('updateList', res.data.data);
=======
        let res = await nashuju({cityId:payload.cityId,carId:payload.carId});
        commit('updateList', res.data);
>>>>>>> zyh
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}