import {getShi} from '@/services/index'

const state = {
    listright: []
}

const mutations = {
    updateList(state, payload) {
        state.listright = payload;
    }
}

const actions = {
      async getShi({ commit }, payload) {
         console.log(payload) 
      let res= await getShi(payload)
      
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