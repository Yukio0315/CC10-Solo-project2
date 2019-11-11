<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  // computed: {
  //   currentQuestionAndCategory() {
  //     // console.log(
  //     //   this.$store.state.quiz.results[this.$store.state.quizNo]["question"]
  //     // )
  //     // return "hoge"
  //     return {
  //       question: this.$store.state.quiz.results[this.$store.state.quizNo][
  //         "question"
  //       ],
  //       category: this.$store.state.quiz.results[this.$store.state.quizNo][
  //         "category"
  //       ]
  //     }
  //   }
  // },
  methods: {
    ...mapMutations("quiz", ["addQuizNo"])
  }
}
</script>
