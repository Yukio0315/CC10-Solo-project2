<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  computed: {
    quizNo() {
      return this.$store.state.quiz.quizNo
    },
    currentQuestionAndCategory() {
      return this.$store.getters["quiz/currentQuestionAndCategory"]
    },
    currentOptions() {
      return this.$store.getters["quiz/currentOptions"]
    }
  },
  methods: {
    ...mapMutations({
      addQuizNo: "quiz/addQuizNo",
      judgeAnswer: "quiz/judgeAnswer",
      goHome: "quiz/goHome"
    })
  }
}
</script>
