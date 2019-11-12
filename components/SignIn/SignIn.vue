<template src="./template.html" />

<script>
import firebase from "~/plugins/firebase"
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Success!")
          this.$router.push("/quiz")
        })
        .catch(error => {
          alert(error.message)
        })
    },
    ...mapMutations({
      toggleSignInAndSignUp: "toggleSignInAndSignUp"
    })
  }
}
</script>
