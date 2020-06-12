new Vue({
  el: "#vue-app",
  data: {
    name: "",
    age: "",
  },
  methods: {
    logName() {
      console.log("you enterd a name");
    },
    logAge() {
      console.log("you enter your age");
    },
  },
});
