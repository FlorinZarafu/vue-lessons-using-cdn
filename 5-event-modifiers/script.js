new Vue({
  el: "#vue-app",
  data: {
    age: 29,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (number) {
      this.age += number;
    },
    sub: function (number) {
      this.age -= number;
    },
    updatexy: function (event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click() {
      alert("you clicked");
    },
  },
});
