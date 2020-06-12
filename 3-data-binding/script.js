new Vue({
  el: "#vue-app",
  data: {
    name: "florin",
    job: "ninja",
    website: "www.google.com",
    websiteTag: `<a href='www.google.com'>Webiste</a>`,
  },
  methods: {
    greet: function (time) {
      return `good ${time} ${this.name}`;
    },
  },
});
