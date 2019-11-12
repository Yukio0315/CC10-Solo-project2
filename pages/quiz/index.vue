<template>
  <div class="container">
    <div>
      <h1 class="title">
        Simple Quiz
      </h1>
      <div v-if="quizNo === 1 && start === false">
        <Start />
      </div>
      <div v-if="[1, 2, 3, 4, 5].includes(quizNo) && start === true">
        <Quiz />
      </div>
      <div v-if="quizNo === 6 && correctCount === 5">
        <Win />
      </div>
      <div v-if="quizNo === 6 && correctCount !== 5">
        <Loose />
      </div>
    </div>
  </div>
</template>

<script>
import Start from "~/components/Start/Start.vue"
import Quiz from "~/components/Quiz/Quiz.vue"
import Loose from "~/components/Loose/Loose.vue"
import Win from "~/components/Win/Win.vue"
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
  }
}
</script>
