export default {
  async fetchQuiz({ commit }, level) {
    const quiz = await this.$axios.$get(
      `https://opentdb.com/api.php?amount=5&difficulty=${level}&type=multiple`
    )
    commit("setInitialQuizAndValue", quiz)
  }
}
