<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  methods: {
    ...mapMutations({ goHome: "quiz/goHome" })
  }
}
</script>

<style scoped src="./style.css"></style>
