<template>
  <div class="container">
    <div>
      <h1 class="title">
        Simple Quiz
      </h1>
      <div v-if="quizNo === 0">
        <Start />
      </div>
      <div v-if="[1, 2, 3, 4].includes(quizNo)">
        <Quiz />
      </div>
      <div v-if="quizNo === 5 && correctCount === 5">
        <Win />
      </div>
      <div v-if="quizNo === 5 && correctCount !== 5">
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
import { mapGetters } from "vuex"
export default {
  components: {
    Start,
    Quiz,
    Loose,
    Win
  },
  computed: {
    ...mapGetters({ quizNo: "quiz/quizNo" }),
    correctCount() {
      return this.$store.getters["quiz/correctCount"]
    }
  }
}
</script>
