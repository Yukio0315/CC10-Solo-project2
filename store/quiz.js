export const state = () => ({
  quizNo: 0,
  correctCount: 0,
  quiz: [],
  currentAnswer: "",
  finished: false
})

export const getters = {
  currentQuestionAndCategory(state) {
    return {
      question: state.quiz[state.quizNo - 1]["question"],
      category: state.quiz[state.quizNo - 1]["category"]
    }
  },
  currentOptions(state) {
    const options = [state.quiz[state.quizNo - 1]["correct_answer"]].concat(
      state.quiz[state.quizNo - 1]["incorrect_answers"]
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
    return state.quizNo
  },
  correctCount(state) {
    return state.correctCount
  },
  finished(state) {
    return state.finished
  }
}

export const mutations = {
  setInitialQuizAndValue(state, quiz) {
    state.quiz = quiz.results
    state.quizNo = 1
    state.currentAnswer = state.quiz[state.quizNo - 1]["correct_answer"]
  },
  addQuizNo(state) {
    state.quizNo++
    state.currentAnswer = state.quiz[state.quizNo - 1]["correct_answer"]
  },
  judgeAnswer(state, answer) {
    if (answer === state.currentAnswer) state.correctCount++
    state.quizNo++
    if (state.quizNo <= 5) {
      state.currentAnswer = state.quiz[state.quizNo - 1]["correct_answer"]
    }
  },
  goHome(state) {
    state.quizNo = 0
    state.correctCount = 0
    state.quiz = []
    state.currentAnswer = ""
  }
}

export const actions = {
  async fetchQuiz({ commit }, level) {
    const quiz = await this.$axios.$get(
      `https://opentdb.com/api.php?amount=5&difficulty=${level}&type=multiple`
    )
    commit("setInitialQuizAndValue", quiz)
  }
}
