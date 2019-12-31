export default {
  setInitialQuizAndValue(state, quiz) {
    state.quiz = quiz.results
    state.start = true
    state.currentAnswer = state.quiz[state.quizNo - 1]["correct_answer"]
  },
  addQuizNo(state) {
    state.quizNo++
    state.rightOrWrong.push("Skipped")
    state.answers.push("I don't know")
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
    state.quizNo = 1
    state.start = false
    state.correctCount = 0
    state.rightOrWrong = []
    state.answers = []
    state.quiz = [{ question: "", category: "" }]
    state.currentAnswer = ""
    state.finished = false
  }
}
