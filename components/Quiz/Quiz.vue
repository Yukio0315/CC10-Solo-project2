<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      // Progress bar setting
      percentage: 0,
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    }
  },
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
    }),
    // progress bar setting
    increase() {
      this.percentage += 20
      if (this.percentage > 100) {
        this.percentage = 100
      }
    }
  }
}
</script>

<style scoped src="./style.css"></style>
