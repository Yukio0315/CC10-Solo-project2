export const state = () => ({
  isSignIn: false
})

export const mutations = {
  toggleSignInAndSignUp(state) {
    state.isSignIn = !state.isSignIn
  }
}
