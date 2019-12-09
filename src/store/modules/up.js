import {getSheng} from '@/services/index'

const state = {
    list: [],
    cityName: ''
}

const mutations = {
    updateList(state, payload) {
        state.list = payload;
    },
    setCityName(state, payload) {
        console.log(payload)
        state.cityName = payload
    }
}

const actions = {
      async getSheng({ commit }, payload) {
        
      let res= await getSheng(payload)
      
        console.log('res123456', res.data);

       await  commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}