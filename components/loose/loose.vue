<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  computed: {
    correctAnswers() {
      return this.$store.getters["quiz/correctAnswers"]
    },
    questions() {
      return this.$store.getters["quiz/questions"]
    },
    answers() {
      return this.$store.getters["quiz/answers"]
    },
    rightOrWrong() {
      return this.$store.getters["quiz/rightOrWrong"]
    }
  },
  methods: {
    ...mapMutations({ goHome: "quiz/goHome" })
  }
}
</script>
