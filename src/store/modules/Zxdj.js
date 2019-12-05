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
        // console.log("11111111111111",payload)
        let res = await nashuju({cityId:payload.cityId,carId:payload.carId});
        console.log('res...sssssssss', res.data);
        commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}