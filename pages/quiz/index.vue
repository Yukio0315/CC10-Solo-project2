<template src="./template.html" />

<script>
import Start from "~/components/Start/Start.vue"
import Quiz from "~/components/Quiz/Quiz.vue"
import Loose from "~/components/Loose/Loose.vue"
import Win from "~/components/Win/Win.vue"
import firebase from "~/plugins/firebase"
export default {
  components: {
    Start,
    Quiz,
    Loose,
    Win
  },
  computed: {
    quizNo() {
      return this.$store.state.quiz.quizNo
    },
    finished() {
      return this.$store.state.quiz.finished
    },
    correctCount() {
      return this.$store.state.quiz.correctCount
    },
    start() {
      return this.$store.state.quiz.start
    }
  },
  created() {
    const user = firebase.auth().currentUser
    if (!user) this.$router.push("/")
  }
}
</script>

<style scoped src="./style.css"></style>
