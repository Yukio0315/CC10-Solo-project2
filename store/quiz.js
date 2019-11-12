export const state = () => ({
  quizNo: 0,
  correctCount: 0,
  rightOrWrong: [],
  answers: [],
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
  correctAnswers(state) {
    return state.quiz.map(quiz => quiz["correct_answer"])
  },
  questions(state) {
    return state.quiz.map(quiz => quiz["question"])
  },
  quizNo(state) {
    return state.quizNo
  },
  correctCount(state) {
    return state.correctCount
  },
  finished(state) {
    return state.finished
  },
  answers(state) {
    return state.answers
  },
  rightOrWrong(state) {
    return state.rightOrWrong
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
    state.rightOrWrong.push("skipped")
    state.answers.push("")
    state.currentAnswer = state.quiz[state.quizNo - 1]["correct_answer"]
  },
  judgeAnswer(state, answer) {
    if (answer !== state.currentAnswer) state.rightOrWrong.push("Wrong")
    if (answer === state.currentAnswer) {
      state.rightOrWrong.push("Right")
      state.correctCount++
    }
    state.quizNo++
    state.answers.push(answer)
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
