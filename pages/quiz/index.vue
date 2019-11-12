<template src="./template.html" />

<script>
import Start from "~/components/Start/Start.vue"
import Quiz from "~/components/Quiz/Quiz.vue"
import Loose from "~/components/Loose/Loose.vue"
import Win from "~/components/Win/Win.vue"
// import { mapGetters } from "vuex"
export default {
  components: {
    Start,
    Quiz,
    Loose,
    Win
  },
  // data() {
  //   return {
  //     loaded: false
  //   }
  // },
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
    // ...mapGetters(["isAuthenticated"])
  }
  // async mounted() {
  //   setTimeout(() => {
  //     if (!this.isAuthenticated) {
  //       this.$router.push("/")
  //     }
  //     this.loaded = true
  //   }, 0)
  // }
}
</script>
