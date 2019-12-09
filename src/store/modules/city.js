import {nacity} from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
        state.list = payload;
    }
}

const actions = {
    async  nacity({commit}, payload){
        let res = await nacity();
        // console.log('res123456', res);
        commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}