<template>
  <div class="container">
    <div>
      <h1 class="title">
        Simple Quiz
      </h1>
      <div v-if="$store.state.quiz.level === ''">
        <Start />
      </div>
      <div v-if="$store.state.quiz.level">
        <Quiz />
      </div>
    </div>
  </div>
</template>

<script>
import Start from "~/components/Start/Start.vue"
import Quiz from "~/components/Quiz/Quiz.vue"
export default {
  components: {
    Start,
    Quiz
  }
}
</script>
