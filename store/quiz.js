export const state = () => ({
  level: "",
  quizNo: 0,
  correctCount: 0,
  quiz: []
})

export const mutations = {
  setLevel(state, level) {
    state.level = level
  },
  setQuiz(state, quiz) {
    state.quiz = quiz
  },
  setQuizNo(state, quizNo) {
    state.quizNo = quizNo
  }
}

export const actions = {
  async fetchQuiz({ commit }, level) {
    const quiz = await this.$axios.$get(
      `https://opentdb.com/api.php?amount=5&difficulty=${level}&type=multiple`
    )
    commit("setQuiz", quiz)
    commit("setLevel", level)
    commit("setQuizNo", 1)
  }
}
