new Vue({
  el: "#vue-app",
  data: {
    name: "florin",
    job: "ninja",
  },
  methods: {
    greet: function (time) {
      return `good ${time} ${this.name}`;
    },
  },
});
