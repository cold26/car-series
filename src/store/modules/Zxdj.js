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
        let res = await nashuju({cityId:payload.cityId,carId:payload.carId});
        commit('updateList', res.data.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}