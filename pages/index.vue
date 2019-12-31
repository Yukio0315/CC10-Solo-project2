<template src="./template.html" />

<script>
import SignUp from "~/components/SignUp/SignUp.vue"
import SignIn from "~/components/SignIn/SignIn.vue"
import firebase from "~/plugins/firebase"
export default {
  components: {
    SignUp,
    SignIn
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn
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
    }
  }
}
</script>

<style scoped src="./style.css"></style>
