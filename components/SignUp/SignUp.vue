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
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Account created!")
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
