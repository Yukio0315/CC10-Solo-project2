<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  computed: {
    correctAnswers() {
      return this.$store.getters["quiz/getCorrectAnswers"]
    },
    questions() {
      return this.$store.getters["quiz/getQuestions"]
    },
    answers() {
      console.log(this.$store.state.quiz.answers)
      return this.$store.state.quiz.answers
    },
    rightOrWrong() {
      console.log(this.$store.state.quiz.rightOrWrong)
      return this.$store.state.quiz.rightOrWrong
    }
  },
  methods: {
    ...mapMutations({ goHome: "quiz/goHome" })
  }
}
</script>
