<template src="./template.html" />

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions({ fetchQuiz: "quiz/fetchQuiz" })
  }
}
</script>
