Vue.component("greeting", {
  template:
    "<p>Reusable component {{ name }} <button @click='changeName'>ghange name</button></p>",
  data() {
    return {
      name: "Yoshi",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Florin";
    },
  },
});

new Vue({
  el: "#vue-app-one",
});
new Vue({
  el: "#vue-app-two",
});
