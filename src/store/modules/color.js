import { getcolor } from '@/services/index'

const state = {
    obj: {},
    list: []
}

const mutations = {
    updateList(state, payload) {
        state.obj = payload.data;//把
        let list = [];
        Object.keys(state.obj).forEach(item => {
            list.push({ key: item, colorList: state.obj[item] })
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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}