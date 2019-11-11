export const state = () => ({
  quizNo: 0,
  correctCount: 0,
  quiz: []
})

export const getters = {
  currentQuestionAndCategory(state) {
    if (state.quiz.results.length === 0) return []
    return {
      question: state.quiz.results[state.quizNo]["question"],
      category: state.quiz.results[state.quizNo]["category"]
    }
  },
  currentAnswer(state) {
    if (state.quiz.results.length === 0) return []
    const options = [state.quiz.results[state.quizNo]["correct_answer"]].concat(
      state.quiz.results[state.quizNo]["incorrect_answers"]
    )
    // Fisher–Yates shuffle Algorithm
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = options[i]
      options[i] = options[j]
      options[j] = tmp
    }
    return options
  },
  quizNo(state) {
    console.log(state.quizNo)
    return state.quizNo
  },
  correctCount(state) {
    console.log(state.correctCount)
    return state.correctCount
  }
}

export const mutations = {
  setInitialQuizAndValue(state, quiz) {
    state.quiz = quiz.results
    console.log(state.quiz)
    state.quizNo = 1
    console.log(state.quizNo)
  },
  addQuizNo(state) {
    state.quizNo++
  }
}

export const actions = {
  async fetchQuiz({ commit }, level) {
    console.log(level)
    const quiz = await this.$axios.$get(
      `https://opentdb.com/api.php?amount=5&difficulty=${level}&type=multiple`
    )
    commit("setInitialQuizAndValue", quiz)
  }
}
