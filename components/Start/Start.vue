<template src="./template.html" />

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions("quiz", ["fetchQuiz"])
  }
}
</script>
