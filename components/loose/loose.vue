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
      return this.$store.state.quiz.answers
    },
    rightOrWrong() {
      return this.$store.state.quiz.rightOrWrong
    }
  },
  methods: {
    ...mapMutations({ goHome: "quiz/goHome" })
  }
}
</script>

<style scoped src="./style.css"></style>
