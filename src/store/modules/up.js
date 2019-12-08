import {getSheng} from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload) {
        state.list = payload;
    }
}

const actions = {
      async getSheng({ commit }, payload) {
         console.log(payload) 
      let res= await getSheng(payload)
      
        console.log('res...', res.data);

       await  commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}