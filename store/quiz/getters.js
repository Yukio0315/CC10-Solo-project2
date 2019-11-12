export default {
  currentQuestionAndCategory(state) {
    if (state.quiz === undefined) return []
    return {
      question: state.quiz[state.quizNo - 1]["question"],
      category: state.quiz[state.quizNo - 1]["category"]
    }
  },
  currentOptions(state) {
    if (state.quiz === undefined) return []
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
  getCorrectAnswers(state) {
    return state.quiz.map(quiz => quiz["correct_answer"])
  },
  getQuestions(state) {
    return state.quiz.map(quiz => quiz["question"])
  }
}
