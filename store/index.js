export const state = () => ({
  user: null,
  isSignIn: false,
  isLoggedIn: false
})

export const mutations = {
  setUser(state, payload) {
    console.log(payload)
    state.user = payload
  },
  toggleSinInAndSignUp(state) {
    console.log("toggle")
    state.isSignIn = !state.isSignIn
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit("setUser", payload)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}
