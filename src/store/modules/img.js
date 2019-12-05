import { naimg } from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload) {
        state.list = payload;
    }
}

const actions = {
    async naimg({ commit }, payload) {
        console.log(payload, 111111111)
        let res = await naimg(payload);
        console.log('res...', res.data);
        commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}