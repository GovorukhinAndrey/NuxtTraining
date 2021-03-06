export const state = () => ({
  token: null
})

export const getters = {
  hasToken: s => !!s.token
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  // вызывается один раз в серверной части
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')
  },
 login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  }
}
