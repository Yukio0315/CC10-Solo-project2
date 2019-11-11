<template src="./template.html" />

<script>
import { mapMutations } from "vuex"
export default {
  methods: {
    ...mapMutations({ goHome: "quiz/goHome" })
  }
}
</script>
