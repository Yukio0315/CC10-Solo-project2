<template src="./template.html" />

<script>
import firebase from "~/plugins/firebase"
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions({ fetchQuiz: "quiz/fetchQuiz" }),
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/")
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
