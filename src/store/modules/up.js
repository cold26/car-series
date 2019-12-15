import {getSheng} from '@/services/index'

const state = {
    list: [],
    cityName: '',
    cityID: 0
}

const mutations = {
    updateList(state, payload) {
        state.list = payload;
    },
    setCityName(state, payload) {
        console.log(payload)
        state.cityName = payload
    },
    setCityID(state, payload) {
        state.cityID = payload
    }
}

const actions = {
      async getSheng({ commit }, payload) {
        
        let res= await getSheng(payload)
        console.log(res,"aaaaaaaaaaa")
       await  commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}