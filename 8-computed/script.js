new Vue({
  el: "#vue-app",
  data: {
    age: 20,
    a: 0,
    b: 0,
  },
  computed: {
    addToA() {
      return this.a + this.age;
    },
    addToB() {
      return this.b + this.age;
    },
  },
});
